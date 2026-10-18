import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import products from "../data/products";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

// Uses the post's own cover, else borrows a product photo as a placeholder.
export const getCover = (post, index = 0) => {
  if (post.cover) return post.cover;
  const p = products[index % Math.max(products.length, 1)];
  return p?.images?.[0] ?? p?.image;
};

const Meta = ({ post }) => (
  <p className="text-sm text-[#5f5b55]">
    {post.category} · {formatDate(post.date)} · {post.readTime} min read
  </p>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = useMemo(
    () => ["All", ...new Set(blogPosts.map((p) => p.category))],
    [],
  );

  const posts = useMemo(
    () =>
      blogPosts
        .map((post, index) => ({ ...post, index }))
        .filter((p) => activeCategory === "All" || p.category === activeCategory),
    [activeCategory],
  );

  const showFeatured = activeCategory === "All" && posts.length > 0;
  const featured = showFeatured ? posts[0] : null;
  const rest = showFeatured ? posts.slice(1) : posts;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your newsletter service or backend.
    setSubscribed(true);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 lg:py-16">
      {/* Header */}
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <h1 className="font-serif text-4xl text-[#1a1a1a] md:text-5xl">
          The Lumire Journal
        </h1>
        <p className="max-w-md text-[15px] leading-relaxed text-[#5f5b55]">
          Style ideas, care tips and honest guides to fine jewelry.
        </p>
      </header>

      {/* Category filter */}
      <div
        className="mb-12 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter articles by category"
      >
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={active}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a] ${
                active
                  ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                  : "border-[#E6E2DB] text-[#1a1a1a] hover:bg-[#F3F1EC]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured */}
      {featured && (
        <Link
          to={`/blog/${featured.slug}`}
          className="group mb-16 grid items-center gap-6 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#1a1a1a] md:grid-cols-2 md:gap-12"
        >
          <div className="aspect-4/3 overflow-hidden bg-[#F3F1EC]">
            <img
              src={getCover(featured, featured.index)}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Meta post={featured} />
            <h2 className="font-serif text-3xl leading-tight text-[#1a1a1a] md:text-4xl">
              {featured.title}
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-[#5f5b55]">
              {featured.excerpt}
            </p>
            <span className="w-fit border-b border-[#1a1a1a] pb-0.5 text-sm text-[#1a1a1a]">
              Read article
            </span>
          </div>
        </Link>
      )}

      {/* Grid */}
      {rest.length > 0 ? (
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#1a1a1a]"
              >
                <div className="aspect-3/2 overflow-hidden bg-[#F3F1EC]">
                  <img
                    src={getCover(post, post.index)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <Meta post={post} />
                <h2 className="font-serif text-xl leading-snug text-[#1a1a1a]">
                  {post.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#5f5b55]">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        !featured && (
          <p className="py-16 text-center text-[#5f5b55]">
            No articles in this category yet.
          </p>
        )
      )}

      {/* Newsletter */}
      <div className="mt-20 flex flex-col items-center gap-4 bg-[#F3F1EC] px-6 py-12 text-center">
        <h2 className="font-serif text-2xl text-[#1a1a1a] md:text-3xl">
          Get 10% off your first order
        </h2>
        <p className="max-w-md text-[15px] text-[#5f5b55]">
          Join our list for new articles, new arrivals and your welcome code.
        </p>

        {subscribed ? (
          <p className="text-[15px] text-[#1a1a1a]" role="status">
            You're on the list. Your welcome code is on its way.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 flex-1 border border-[#E6E2DB] bg-white px-4 text-[15px] text-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-[#1a1a1a]"
            />
            <button
              type="submit"
              className="h-12 cursor-pointer bg-[#1a1a1a] px-6 text-sm tracking-wide text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Blog;