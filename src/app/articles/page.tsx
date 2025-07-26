import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata = {
  title: "Articles | Arpan's Portfolio",
  description:
    "Read my latest articles and blog posts about web development, technology, and more.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <AnimatedGroup preset="slide" className="space-y-8">
          <header className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-zinc-100 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-xl hover:bg-red-400 hover:border-red-400 transition-all duration-300 size-10 shadow-lg hover:shadow-red-400/25 hover:scale-110"
              asChild
            >
              <Link href="/">
                <ArrowLeftIcon weight="bold" />
              </Link>
            </Button>
            <div>
              <h1 className="text-4xl font-bold mb-2">Articles</h1>
              <p className="text-zinc-400 text-lg">
                Thoughts, tutorials, and insights about offbeat technology
                topics.
              </p>
            </div>
          </header>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-zinc-300">
                  No Articles Yet
                </h2>
                <p className="text-zinc-400 max-w-md mx-auto">
                  Articles will appear here once you add markdown files to the{" "}
                  <code className="bg-zinc-800 px-2 py-1 rounded text-sm">
                    src/data/articles
                  </code>{" "}
                  directory.
                </p>
              </div>
            </div>
          )}
        </AnimatedGroup>
      </div>
    </div>
  );
}
