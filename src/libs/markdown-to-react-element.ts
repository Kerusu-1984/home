import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import { Fragment,createElement } from "react";
import CustomLink from "../components/CustomLink";
import CustomImage from "../components/CustomImage";

export const markdownToReactElement = (markdownContent: string) => {
  return remark()
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeReact, {
      Fragment,
      components: {
        a:CustomLink,
        img:CustomImage,
      },
      createElement,
    })
    .processSync(markdownContent).result;
};