import { NextPage } from "next";
import { getAllSlug } from "../../libs/get-all-slug";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMarkdown } from "../../libs/get-markdown";
import { markdownToHtml } from "../../libs/markdown-to-html";
import { Breadcrumbs } from "../../components/Breadcrumb";

type BlogDetailPageProps = {
  htmlContent: string;
  slug: string;
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

  return {
    props: {
      htmlContent: await markdownToHtml(
        getMarkdown(`articles/${slug}.md`).content
      ),
      slug,
    },
  };
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({
  htmlContent,
  slug,
}) => {
  return (
    <>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <hr />
      <div className="m-2">
        <Breadcrumbs
          breadcrumbList={[
            { title: "Home", link: "/" },
            { title: "Blog", link: "/blog/" },
            { title: slug },
          ]}
        />
      </div>
    </>
  );
};

export default BlogDetailPage;
