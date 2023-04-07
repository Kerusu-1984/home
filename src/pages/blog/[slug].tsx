import { NextPage } from "next";
import { getAllSlug } from "../../libs/get-all-slug";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMarkdown } from "../../libs/get-markdown";
import { markdownToReactElement } from "../../libs/markdown-to-react-element";
import { Breadcrumbs } from "../../components/Breadcrumb";

type BlogDetailPageProps = {
  markdownContent: string;
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
      markdownContent: getMarkdown(`articles/${slug}.md`).content,
      slug,
    },
  };
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({
  markdownContent,
  slug,
}) => {
  return (
    <div className="container">
      <>
        {markdownToReactElement(markdownContent)}
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
    </div>
  );
};

export default BlogDetailPage;
