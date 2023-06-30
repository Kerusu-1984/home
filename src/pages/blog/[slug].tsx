import { NextPage } from "next";
import { getAllSlug } from "libs/get-all-slug";
import { getMarkdown } from "libs/get-markdown";
import { markdownToReactElement } from "libs/markdown-to-react-element";
import Breadcrumb from "components/Breadcrumb";
import { NextSeo } from "next-seo";

type BlogDetailPageProps = {
  markdownContent: string;
  article: Article;
};

type Article = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: getAllSlug("articles").map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params?.slug;
  const article = getMarkdown(`articles/${slug}.md`);

  return {
    props: {
      markdownContent: getMarkdown(`articles/${slug}.md`).content,
      article: {
        slug,
        title: article.data.title,
        date: article.data.date,
        description: article.data.description,
        image: article.data.image,
      },
    },
  };
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({
  markdownContent,
  article,
}) => {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        openGraph={{
          type: "website",
          title: article.title,
          description: article.description,
          url: `https://kerusu.xyz/blog/${article.slug}`,
          images: [
            {
              url: article.image ? `https://kerusu.xyz${article.image}` : "",
              alt: "サムネイル",
            },
          ],
        }}
        twitter={{
          handle: "@kerusu_1984",
          site: "@kerusu_1984",
          cardType: "summary_large_image",
        }}
      />
      <div className="w-screen p-12">
        <main>
          <div className="prose md:w-2/3 mx-auto prose-img:my-3 prose-img:w-3/4">
            {markdownToReactElement(markdownContent)}
          </div>
        </main>
        <hr />
        <footer>
          <Breadcrumb
            breadcrumb={[
              { title: "Home", link: "/" },
              { title: "Blog", link: "/blog/" },
              { title: article.title },
            ]}
          />
        </footer>
      </div>
    </>
  );
};

export default BlogDetailPage;
