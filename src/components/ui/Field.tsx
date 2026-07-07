import { useId } from "react";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface ShellProps {
  label: string;
  error?: string;
  hint?: string;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
  className?: string;
}

/*
 * Involucro comune dei campi: etichetta in maiuscoletto, filetto come
 * unico bordo, errore sommesso sotto la linea. Nessuna scatola.
 */
function FieldShell({ label, error, hint, children, className = "" }: ShellProps) {
  const id = useId();
  const messageId = error || hint ? `${id}-msg` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="eyebrow block text-taupe">
        {label}
      </label>
      {children({ id, describedBy: messageId, invalid: Boolean(error) })}
      {(error || hint) && (
        <p
          id={messageId}
          className={`mt-2 text-xs font-light tracking-wide ${error ? "text-error" : "text-taupe/80"}`}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

type CommonProps = {
  label: string;
  error?: string;
  hint?: string;
  className?: string;
};

export function TextField({
  label,
  error,
  hint,
  className,
  ...rest
}: CommonProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell label={label} error={error} hint={hint} className={className}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className="field-input"
          {...rest}
        />
      )}
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  error,
  hint,
  className,
  ...rest
}: CommonProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell label={label} error={error} hint={hint} className={className}>
      {({ id, describedBy, invalid }) => (
        <textarea
          id={id}
          rows={4}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className="field-input resize-none"
          {...rest}
        />
      )}
    </FieldShell>
  );
}

export function SelectField({
  label,
  error,
  hint,
  className,
  children,
  ...rest
}: CommonProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell label={label} error={error} hint={hint} className={className}>
      {({ id, describedBy, invalid }) => (
        <select
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className="field-input"
          {...rest}
        >
          {children}
        </select>
      )}
    </FieldShell>
  );
}
