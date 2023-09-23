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
  category: { name: string }[];
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
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main>
        <h1 className="text-4xl">Blog</h1>
        <ul className="m-4">
          {blog.map((blog) => (
            <li key={blog.id} className="my-2">
              <a href={`/blog/${blog.id}`}>
                {" "}
                {blog.createdAt} <br /> {blog.title}
              </a>
            </li>
          ))}
        </ul>
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
