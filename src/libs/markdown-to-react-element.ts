import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import CustomImage from "../components/CustomImage";
import { Fragment,createElement } from "react";
import CustomLink from "../components/CustomLink";

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
        img: CustomImage,
        a:CustomLink
      },
      createElement,
    })
    .processSync(markdownContent).result;
};