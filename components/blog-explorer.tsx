"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts } from "@/lib/blog";
import { BlogCard } from "./blog-card";

export function BlogExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const results = useMemo(() => blogPosts.filter((post) => {
    const categoryMatches = category === "All" || post.category === category;
    const searchable = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
    return categoryMatches && searchable.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <div className="blog-explorer">
      <div className="blog-tools">
        <div className="category-list" aria-label="Filter articles by category">
          {blogCategories.map((item) => (
            <button className={category === item ? "active" : ""} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <label className="search-field">
          <span className="sr-only">Search articles</span>
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights" />
        </label>
      </div>
      {results.length ? (
        <div className="blog-grid">
          {results.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      ) : (
        <div className="empty-state"><h2>No articles found</h2><p>Try a broader search or choose another category.</p></div>
      )}
    </div>
  );
}
