"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import profile from "@/data/profile";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const SocialWidget = () => {
  return (
    <div className="max-sm:hidden fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <AnimatedGroup
        variants={{
          container: containerVariants,
          item: itemVariants,
        }}
        className="flex flex-col space-y-3"
      >
        {profile.socials.map((social, key) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="text-zinc-100 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-xl hover:bg-red-400 hover:border-red-400 transition-all duration-300 size-12 shadow-lg hover:shadow-red-400/25 hover:scale-110"
                asChild
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} className="size-7" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p className="capitalize">{social.platform}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </AnimatedGroup>
    </div>
  );
};

export default SocialWidget;
