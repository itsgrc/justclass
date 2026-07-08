/*
 * Shim locale per /api in sviluppo: un server Node minimo che monta gli
 * handler in api/ (via tsx, on-the-fly) su http://localhost:3001,
 * dietro il proxy configurato in vite.config.ts. Su Vercel questo
 * file non serve — la piattaforma monta /api da sé.
 */
import { createServer } from "node:http";

const ROUTES = {
  "/api/request": () => import("../api/request.ts"),
  "/api/admin/requests": () => import("../api/admin/requests.ts"),
};

const PORT = 3001;

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => (raw += chunk));
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

createServer(async (req, res) => {
  const send = (code, body) => {
    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body));
  };

  const { pathname } = new URL(req.url, "http://localhost");
  const loadRoute = ROUTES[pathname];
  if (!loadRoute) {
    send(404, { success: false, error: "Non trovato." });
    return;
  }

  const raw = await collectBody(req);
  let body = {};
  try {
    body = raw ? JSON.parse(raw) : {};
  } catch {
    send(400, { success: false, error: "JSON non valido." });
    return;
  }

  const { default: handler } = await loadRoute();
  await handler(
    { method: req.method, body, headers: req.headers },
    { status: (code) => ({ json: (payload) => send(code, payload) }) },
  );
}).listen(PORT, () => {
  console.log(`dev-api-server in ascolto su http://localhost:${PORT}`);
});
