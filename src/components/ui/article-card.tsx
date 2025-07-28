import Link from "next/link";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border/50 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400/20 via-red-400 to-red-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none" />

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
              {article.title}
            </h3>
            {article.description && (
              <p className="text-muted-foreground/90 line-clamp-2 leading-relaxed text-sm group-hover:text-muted-foreground transition-colors duration-300">
                {article.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground/80 bg-primary/10 rounded-full px-3 py-1.5 transition-colors group-hover:bg-primary/10 group-hover:text-primary/80">
            <CalendarIcon className="size-3.5" weight="fill" />
            <time dateTime={article.date} className="font-medium">
              {formatDate(article.date)}
            </time>
          </div>

          {article.readingTime && (
            <div className="flex items-center gap-2 text-sm text-foreground/80 bg-primary/10 rounded-full px-3 py-1.5 transition-colors group-hover:bg-primary/10 group-hover:text-primary/80">
              <ClockIcon className="size-3.5" weight="fill" />
              <span className="font-medium">
                {article.readingTime} min read
              </span>
            </div>
          )}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-medium bg-primary/8 text-primary border-primary/20 hover:bg-primary/15 transition-all duration-200 group-hover:scale-105"
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: `translateY(${Math.random() * 2}px)`,
                }}
              >
                {tag}
              </Badge>
            ))}
            {article.tags.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs font-medium border-dashed border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                +{article.tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <div className="flex-1" />

        <div className="flex items-center justify-between">
          <Button
            asChild
            className="group/btn bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 z-40"
          >
            <Link href={`/articles/${article.slug}`}>
              <span className="font-semibold">Read Article</span>
              <ArrowUpRightIcon
                weight="bold"
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Link>
          </Button>

          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-all duration-300 delay-75" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/10 group-hover:bg-primary/30 transition-all duration-300 delay-150" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </article>
  );
}
