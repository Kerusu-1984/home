import { getAllSlug } from "../../libs/get-all-slug";
import { getMarkdown } from "../../libs/get-markdown";
import { Breadcrumbs } from "../../components/Breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container">
      <h1>Blog</h1>
      <ul className="m-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={`/blog/${article.slug}`}>
              {" "}
              {article.date} <br /> {article.title}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div className="m-2">
        <Breadcrumbs
          breadcrumbList={[{ title: "Home", link: "/" }, { title: "Blog" }]}
        />
      </div>
    </div>
  );
}
