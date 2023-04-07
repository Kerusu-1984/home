import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

const CustomLink = ({
  href,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return href?.startsWith("/") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default CustomLink;
