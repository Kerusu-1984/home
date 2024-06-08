import Breadcrumb from "components/Breadcrumb";
import { client } from "libs/client";
import { useState } from "react";

const FETCH_LIMIT = 100;
const BLOG_PER_PAGE = 10;

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  category: { name: string };
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { limit: FETCH_LIMIT },
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default function Blog({
  blog,
  totalCount,
}: {
  blog: Blog[];
  totalCount: number;
}) {
  const totalPage = Math.ceil(totalCount / BLOG_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="h-screen md:py-12 px-12 py-24">
      <main className="md:max-w-3xl mx-auto">
        <h1 className="text-4xl">Blog</h1>
        <div className="grid justify-items-stretch gap-4 my-6">
          {blog
            .slice(
              (currentPage - 1) * BLOG_PER_PAGE,
              currentPage * BLOG_PER_PAGE
            )
            .map((blog) => (
              <a
                className="card sm:card-side hover:bg-base-200"
                href={`/blog/${blog.id}`}
                key={blog.id}
              >
                <figure className="sm:max-w-[10rem] sm:pr-0 px-6">
                  <img
                    className="rounded-btn border border-base-300"
                    src={blog.eyecatch.url}
                    alt={blog.title}
                  />
                </figure>
                <div className="card-body">
                  <h5>{blog.title}</h5>
                  <span className="badge">{blog.category.name}</span>
                  <p>{blog.publishedAt.slice(0, 10)}</p>
                </div>
              </a>
            ))}
          <div className="join mx-auto">
            {[...Array(totalPage)]
              .map((_, i) => (
                <button
                  className={`join-item btn ${
                    i + 1 === currentPage ? "btn-active" : ""
                  }`}
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              ))}
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "Blog" }]}
        />
      </footer>
    </div>
  );
}
