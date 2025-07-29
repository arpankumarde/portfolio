"use client";

import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  CodeIcon,
  MedalIcon,
  TrophyIcon,
  GraduationCapIcon,
  HeartIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import profile from "@/data/profile";
import Education from "@/data/education";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Gallery from "@/components/layout/gallery";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export const customItemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export const sectionContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

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
      className="max-w-4xl mx-auto p-8 space-y-12 text-white"
    >
      <header className="flex items-center space-x-4">
        <Image
          src={profile.avatar}
          alt={profile.name}
          className="w-20 h-20 rounded-full border-3 border-red-400"
          height={200}
          width={200}
        />
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-zinc-400">{profile.handle}</p>
        </div>
      </header>

      <main className="space-y-16">
        {/* Section: Profile Summary */}
        <section>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
          >
            <h2 className="text-3xl font-bold leading-tight">
              {profile.title}
            </h2>
            <p className="mt-4 text-zinc-300 max-w-2xl text-lg">
              {profile.summary}
            </p>
            <p className="mt-2 text-zinc-400 max-w-3xl">
              {profile.currentWork}
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400">
                Available for new opportunities
              </span>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                },
                item: customItemVariants,
              }}
              className="mt-6 flex space-x-4"
            >
              {profile.socials.map((social, key) => (
                <Button
                  key={key}
                  size={"icon"}
                  className="text-zinc-100 bg-zinc-700 rounded-lg hover:bg-red-400 transition-colors size-9"
                  asChild
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} className="size-6" />
                  </Link>
                </Button>
              ))}
            </AnimatedGroup>
          </AnimatedGroup>
        </section>

        {/* Section: Experience */}
        <section>
          <div className="flex items-center space-x-3">
            <BriefcaseIcon size={24} className="text-red-400" />
            <h3 className="text-xl font-bold">Experience</h3>
          </div>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
            className="mt-4 space-y-6 border-l-2 border-red-400 pl-6"
          >
            {profile.experience.map((exp, index) => (
              <div className="relative" key={index}>
                <div className="absolute -left-[32.8px] top-1 h-4 w-4 rounded-full bg-red-400"></div>
                <p className="font-semibold">{exp.company}</p>
                <p className="text-zinc-400">{exp.role}</p>
                <p className="text-zinc-500 text-sm">{exp.duration}</p>
              </div>
            ))}
          </AnimatedGroup>
        </section>

        {/* Section: Works */}
        <section>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CodeIcon size={24} className="text-red-400" />
              <h3 className="text-xl font-bold">Works</h3>
            </div>
            <Link
              href={profile.socials[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 flex items-center space-x-1 hover:text-red-400 transition-colors"
            >
              <span>more</span>
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {profile.works.map((work) => (
              <Link
                href={work.link}
                key={work.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 justify-between p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 hover:border-red-400 transition-all"
              >
                <Image
                  src={work.cover}
                  alt={work.title}
                  width={1800}
                  height={900}
                  className="rounded-t-lg group-hover:scale-105 transition-all duration-300"
                />
                {work.hasAccolades && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size={"icon"}
                        className="bg-red-500 hover:bg-red-600 absolute top-6 right-6 text-white rounded-full shadow-md size-7"
                      >
                        <MedalIcon size={20} weight="fill" className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      This project has received special recognition!
                    </TooltipContent>
                  </Tooltip>
                )}
                <span className="flex justify-between items-center text-xl">
                  {work.title}
                  <ArrowUpRightIcon size={20} className="text-zinc-500" />
                </span>
                <span className="text-zinc-300">{work.description}</span>
              </Link>
            ))}
          </AnimatedGroup>
        </section>

        {/* Section: Hackathons */}
        <section>
          <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-3">
              <TrophyIcon size={24} className="text-red-400" />
              <h3 className="text-xl font-bold">Hackathons</h3>
            </div>
            <Link
              href="/hackathons"
              className="text-zinc-400 flex items-center space-x-1 hover:text-red-400 transition-colors"
            >
              <span>more</span>
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
            className="mt-4 space-y-6"
          >
            {profile.hackathons
              .filter((hack) => hack.featured)
              .map((hack, key) => (
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

        {/* Section: Education */}
        <section>
          <div className="flex items-center space-x-3">
            <GraduationCapIcon size={24} className="text-red-400" />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
            className="mt-4 space-y-6 pl-6"
          >
            {Education.map((edu, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-slate-200 rounded-lg">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={60}
                    height={60}
                    className="hover:-rotate-12 aspect-square object-contain transition-all duration-300 rounded-lg bg-white"
                  />
                </div>
                <div className="flex-1">
                  <Link
                    href={edu.site}
                    target="_blank"
                    className="font-semibold underline underline-offset-4 decoration-zinc-600"
                  >
                    {edu.institution}
                  </Link>
                  <p className="text-zinc-400">
                    {edu.degree}, {edu.fieldOfStudy}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </section>

        {/* Section: Certifications */}
        <section>
          <div className="flex items-center space-x-3">
            <MedalIcon size={24} className="text-red-400" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
            className="mt-4 border-t border-zinc-800"
          >
            {profile.certifications.map((cert, key) => (
              <div
                key={key}
                className="flex justify-between items-center py-4 border-b border-zinc-800 hover:bg-zinc-900 px-2"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Image
                    src={cert.image || ""}
                    alt={cert.name}
                    width={50}
                    height={50}
                    className="h-10 aspect-square object-contain"
                  />
                  <div className="flex-1 flex max-md:flex-col md:items-center justify-between">
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 space-x-2 group hover:text-red-400 transition-colors"
                    >
                      <span>{cert.name}</span>
                      {cert.sponsored && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HeartIcon
                              size={18}
                              weight="fill"
                              className="inline text-pink-500"
                            />
                          </TooltipTrigger>
                          <TooltipContent>Sponsored</TooltipContent>
                        </Tooltip>
                      )}
                      <span className="text-zinc-400 inline space-x-1 group-hover:text-red-400 transition-colors">
                        <ArrowUpRightIcon size={16} className="inline" />
                      </span>
                    </Link>
                    <span className="text-zinc-400">{cert.provider}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </section>

        {/* Section: Cherished Moments */}
        <section>
          <AnimatedGroup
            variants={{
              container: sectionContainerVariants,
              item: customItemVariants,
            }}
          >
            <h3 className="text-xl font-bold">Cherished Moments</h3>
            <Gallery />
          </AnimatedGroup>
        </section>
      </main>
    </AnimatedGroup>
  );
};

export default Page;
