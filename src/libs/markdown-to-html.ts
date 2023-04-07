import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export const markdownToHtml = async (markdownContent: string) => {
    const result = await remark()
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdownContent);
  return result.toString();
};