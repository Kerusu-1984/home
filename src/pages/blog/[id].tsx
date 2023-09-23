import Breadcrumb from "components/Breadcrumb";
import { NextSeo } from "next-seo";
import { client } from "libs/client";
import { Blog } from ".";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get<Blog>({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

const BlogDetailPage = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <NextSeo
        title={blog.title}
        openGraph={{
          type: "website",
          title: blog.title,
          url: `https://kerusu.xyz/blog/${blog.id}`,
          images: [
            {
              url: blog.eyecatch.url,
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
      <div className="p-6 md:p-12">
        <main>
          <div className="prose md:max-w-3xl mx-auto">
            <h1>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
            />
          </div>
        </main>
        <hr />
        <footer>
          <Breadcrumb
            breadcrumb={[
              { title: "Home", link: "/" },
              { title: "Blog", link: "/blog/" },
              { title: blog.title, link: "/blog/" + blog.id },
            ]}
          />
        </footer>
      </div>
    </>
  );
};

export default BlogDetailPage;
