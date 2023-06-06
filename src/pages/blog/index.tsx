import { getAllSlug } from "libs/get-all-slug";
import { getMarkdown } from "libs/get-markdown";
import Breadcrumb from "components/Breadcrumb";

type Article = {
  slug: string;
  title: string;
  date: string;
};

export const getStaticProps = () => {
  const slugs = getAllSlug("articles");
  const articles = slugs.map((slug) => {
    const article = getMarkdown(`articles/${slug}.md`);
    return {
      slug,
      title: article.data.title,
      date: article.data.date,
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
};

export default function Blog({ articles }: { articles: Article[] }) {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main>
        <h1 className="text-4xl">Blog</h1>
        <ul className="m-4">
          {articles.map((article) => (
            <li key={article.slug} className="my-2">
              <a href={`/blog/${article.slug}`}>
                {" "}
                {article.date} <br /> {article.title}
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
