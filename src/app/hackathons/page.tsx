import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { customItemVariants, sectionContainerVariants } from "../page";
import Hackathons from "@/data/hackathons";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        },
        item: customItemVariants,
      }}
      className="max-w-4xl mx-auto p-8 space-y-12 text-white min-h-dvh"
    >
      <header className="flex gap-4">
        <Button
          size="icon"
          className="text-zinc-100 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-xl hover:bg-red-400 hover:border-red-400 transition-all duration-300 size-10 shadow-lg hover:shadow-red-400/25 hover:scale-110"
          asChild
        >
          <Link href="/">
            <ArrowLeftIcon weight="bold" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Hackathons</h1>
          <p className="text-zinc-400">
            A collection of hackathons I{`'`}ve participated in, showcasing my
            achievements and contributions.
          </p>
        </div>
      </header>
      <section>
        <AnimatedGroup
          variants={{
            container: sectionContainerVariants,
            item: customItemVariants,
          }}
          className="mt-4 space-y-6"
        >
          {Hackathons.map((hack, key) => (
            <div className="flex justify-between items-start" key={key}>
              <div>
                <p className="font-semibold">{hack.title}</p>
                <p className="text-zinc-400 max-w-md">{hack.description}</p>
              </div>
              <p className="text-zinc-400 text-sm">{hack.location}</p>
            </div>
          ))}
        </AnimatedGroup>
      </section>
    </AnimatedGroup>
  );
};

export default Page;
