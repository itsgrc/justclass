import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeRise, stagger } from "@/lib/motion";
import MaskLines from "@/components/ui/MaskLines";
import HairlineButton from "@/components/ui/HairlineButton";
import Plate from "@/components/ui/Plate";
import { IMAGES } from "@/data/images";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container-luxe pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="grid items-end gap-16 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeRise} className="eyebrow text-bronze">
            {t.home.eyebrow}
          </motion.p>

          <h1 className="mt-10 font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] font-light tracking-[-0.01em]">
            <MaskLines
              delay={0.15}
              lines={[
                t.home.titleLine1,
                <em key="1" className="font-normal">
                  {t.home.titleLine2}
                </em>,
              ]}
            />
          </h1>

          <motion.p
            variants={fadeRise}
            className="mt-10 max-w-md text-lg leading-relaxed text-taupe"
          >
            {t.home.tagline}
          </motion.p>

          <motion.div
            variants={fadeRise}
            className="mt-14 flex flex-wrap items-center gap-10"
          >
            <HairlineButton to="/request">{t.home.ctaRequest}</HairlineButton>
            <Link to="/fleet" className="link-luxe eyebrow text-ink">
              {t.home.ctaFleet}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5 }}
        >
          <Plate
            tone="dusk"
            caption={t.home.heroCaption}
            ratio="4 / 5"
            src={IMAGES["hero-home"]}
            alt={t.home.heroCaption}
            priority
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="mt-24"
      >
        <div className="rule" />
        <p className="eyebrow mt-6 text-taupe">{t.home.locations}</p>
      </motion.div>
    </section>
  );
}
