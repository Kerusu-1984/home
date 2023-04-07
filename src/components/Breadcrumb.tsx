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
    <Breadcrumb.Item key={item.title} linkAs={Link} href={item.link}>
      {item.title}
    </Breadcrumb.Item>
  ) : (
    <Breadcrumb.Item key={item.title} active>
      {item.title}
    </Breadcrumb.Item>
  );
};

export const Breadcrumbs = ({ breadcrumbList }: Props) => {
  return (
    <Breadcrumb>
      {breadcrumbList.map((item) => (
        <BreadcrumbItem item={item} />
      ))}
    </Breadcrumb>
  );
};
