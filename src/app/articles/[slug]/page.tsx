import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
    <div className="min-h-screen bg-gradient-to-tr from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <AnimatedGroup preset="slide" className="space-y-8">
          {/* Back Button */}
          <Button
            size="icon"
            variant="ghost"
            className="text-zinc-100 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-xl hover:bg-red-400 hover:border-red-400 transition-all duration-300 size-10 shadow-lg hover:shadow-red-400/25 hover:scale-110"
            asChild
          >
            <Link href="/article">
              <ArrowLeftIcon weight="bold" />
            </Link>
          </Button>

          {/* Article Header */}
          <header className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {article.title}
            </h1>

            {article.description && (
              <p className="text-xl text-zinc-300 leading-relaxed">
                {article.description}
              </p>
            )}

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>

              {article.readingTime && (
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>{article.readingTime} min read</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-zinc max-w-none">
            <div className="bg-zinc-900/50 rounded-lg p-8 border border-zinc-800">
              <MDXRemote source={article.content} />
            </div>
          </article>

          {/* Footer */}
          <footer className="border-t border-zinc-800 pt-8">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/article">← Back to Articles</Link>
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
