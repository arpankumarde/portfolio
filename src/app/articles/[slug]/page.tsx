import { notFound } from "next/navigation";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

const components: MDXRemoteProps["components"] = {
  a: ({ href, children }) => (
    <Link
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-400/80 no-underline hover:underline underline-offset-2"
    >
      {children}
    </Link>
  ),
};

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Arpan's Portfolio`,
    description: article.description || `Read about ${article.title}`,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto max-sm:py-4 max-sm:px-4 px-8 py-12">
        <AnimatedGroup preset="slide" className="space-y-4 sm:space-y-6">
          <div className="flex max-sm:flex-col items-start justify-between gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="mt-2 text-zinc-100 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-xl hover:bg-red-400 hover:border-red-400 transition-all duration-300 size-10 shadow-lg hover:shadow-red-400/25 hover:scale-110"
              asChild
            >
              <Link href="/articles">
                <ArrowLeftIcon weight="bold" />
              </Link>
            </Button>

            <header className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" weight="fill" />
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>

                  {article.readingTime && (
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" weight="fill" />
                      <span>{article.readingTime} min read</span>
                    </div>
                  )}
                </div>

                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} className="bg-red-500/40 text-zinc-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </header>
          </div>

          <article className="prose prose-invert prose-zinc max-w-none">
            <div className="sm:bg-zinc-900/50 rounded-lg sm:p-8 !py-0 sm:border border-zinc-800">
              <MDXRemote source={article.content} components={components} />
            </div>
          </article>

          <footer className="border-t border-zinc-800 pt-8">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/articles">
                  <ArrowLeftIcon weight="bold" />
                  Back to Articles
                </Link>
              </Button>

              <div className="text-sm text-zinc-400">
                Published on {formatDate(article.date)}
              </div>
            </div>
          </footer>
        </AnimatedGroup>
      </div>
    </div>
  );
}
