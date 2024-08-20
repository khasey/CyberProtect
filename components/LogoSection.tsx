"use client"
import { motion } from "framer-motion";

export function LogoSectionDemo() {
  return (
    <div className="w-full py-6 2xl:py-12 ">
      <div className="mx-auto w-full ">
        <div
          className="group relative flex justify-center items-center overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, grey 20%, grey 80%, transparent 95%)",
          }}
        >
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                className="flex gap-24"  // Augmentez le gap pour éviter le chevauchement
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                {LOGOS.map((logo, key) => (
                  <div key={key} className="flex items-center justify-center w-16 2xl:w-24">
                    <img
                      src={logo.url}
                      className="h-10 brightness-0"
                      alt={`${logo.name}`}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        CONSTANTS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

const LOGOS = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    name: "mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];