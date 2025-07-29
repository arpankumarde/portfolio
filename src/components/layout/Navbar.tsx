"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  CodeIcon,
  FilePdfIcon,
  HouseIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import profile from "@/data/profile";
import { Button } from "../ui/button";
import { getCalApi } from "@calcom/embed-react";

interface NavItem {
  name: string;
  url: string;
  icon: Icon;
  newpage?: boolean;
}

const Navbar = () => {
  const pathname = usePathname();
  const items: NavItem[] = [
    { name: "Home", url: "/", icon: HouseIcon },
    { name: "Hackathons", url: "/hackathons", icon: CodeIcon },
    { name: "Resume", url: profile?.resume, icon: FilePdfIcon, newpage: true },
    { name: "Articles", url: "/articles", icon: NewspaperIcon },
  ];

  const getActiveTab = (currentPath: string) => {
    const exactMatch = items.find((item) => item.url === currentPath);
    if (exactMatch) return exactMatch.name;

    if (currentPath.startsWith("/articles")) return "Articles";
    if (currentPath.startsWith("/hackathons")) return "Hackathons";

    return "Home";
  };

  const [activeTab, setActiveTab] = useState(() => getActiveTab(pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: profile.scheduleId });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="pt-0 sm:pt-16">
      <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 w-fit pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 bg-background/50 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                target={item.newpage ? "_blank" : "_self"}
                rel={item.newpage ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-red-400/60 text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} weight="bold" />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}

          <Button
            variant="outline"
            className="relative cursor-pointer text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary"
            data-cal-namespace={profile.scheduleId}
            data-cal-link={profile.scheduleLink}
            data-cal-config='{"layout":"month_view"}'
          >
            <span className="hidden md:inline">Book a Call</span>
            <span className="md:hidden">
              <PhoneIcon size={18} weight="bold" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
