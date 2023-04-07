import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";

type BreadcrumbItem = {
  title: string;
  link?: string;
};

interface Props {
  breadcrumbList: BreadcrumbItem[];
}

interface DetailProps {
  item: BreadcrumbItem;
}

const BreadcrumbItem = ({ item }: DetailProps) => {
  return item.link ? (
    <Breadcrumb.Item linkAs={Link} href={item.link}>
      {item.title}
    </Breadcrumb.Item>
  ) : (
    <Breadcrumb.Item active>{item.title}</Breadcrumb.Item>
  );
};

export const Breadcrumbs = ({ breadcrumbList }: Props) => {
  return (
    <Breadcrumb>
      {breadcrumbList.map((item, index) => (
        <BreadcrumbItem item={item} key={index} />
      ))}
    </Breadcrumb>
  );
};
