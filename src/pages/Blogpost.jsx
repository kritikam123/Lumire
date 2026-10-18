import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import { getCover } from "./Blog";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams();
  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[index];

  if (!post) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-serif text-3xl text-[#1a1a1a]">
          We couldn't find that article
        </h1>
        <Link
          to="/blog"
          className="bg-[#1a1a1a] px-6 py-3 text-sm tracking-wide text-white"
        >
          BACK TO THE JOURNAL
        </Link>
      </section>
    );
  }

  const more = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#5f5b55]">
        <Link to="/blog" className="hover:text-[#1a1a1a]">
          Journal
        </Link>
        <span aria-hidden> / </span>
        <span>{post.category}</span>
      </nav>

      <header className="mb-8 flex flex-col gap-4">
        <h1 className="font-serif text-4xl leading-tight text-[#1a1a1a] md:text-5xl">
          {post.title}
        </h1>
        <p className="text-sm text-[#5f5b55]">
          {formatDate(post.date)} · {post.readTime} min read
        </p>
      </header>

      <div className="mb-10 aspect-3/2 overflow-hidden bg-[#F3F1EC]">
        <img
          src={getCover(post, index)}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-6 font-serif text-lg leading-8 text-[#2b2926]">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <hr className="my-14 border-[#E6E2DB]" />

      <section aria-labelledby="more-heading">
        <h2
          id="more-heading"
          className="mb-5 font-serif text-2xl text-[#1a1a1a]"
        >
          Keep reading
        </h2>
        <ul className="flex flex-col divide-y divide-[#E6E2DB] border-y border-[#E6E2DB]">
          {more.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="flex items-baseline justify-between gap-4 py-4 text-[#1a1a1a] hover:text-black"
              >
                <span className="font-serif text-lg">{p.title}</span>
                <span className="shrink-0 text-sm text-[#5f5b55]">
                  {p.readTime} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default BlogPost;
