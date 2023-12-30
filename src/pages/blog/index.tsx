import Breadcrumb from "components/Breadcrumb";
import { client } from "libs/client";

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
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Blog({ blog }: { blog: Blog[] }) {
  return (
    <div className="h-screen md:py-12 px-12 py-24">
      <main className="md:max-w-3xl mx-auto">
        <h1 className="text-4xl">Blog</h1>
        <div className="grid justify-items-stretch gap-4 my-6">
          {blog.map((blog) => (
            <a className="card sm:card-side hover:bg-base-200" href={`/blog/${blog.id}`} key={blog.id}>
              <figure className="sm:max-w-[10rem] sm:pr-0 px-6">
                <img className="rounded-btn border border-base-300" src={blog.eyecatch.url} alt={blog.title} />
              </figure>
              <div className="card-body">
                <h5>{blog.title}</h5>
                <span className="badge">{blog.category.name}</span>
                <p>{blog.publishedAt.slice(0, 10)}</p>
              </div>
            </a>
          ))}
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
