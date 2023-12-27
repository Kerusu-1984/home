import Link from "next/link";

type BreadcrumbItem = {
  title: string;
  link?: string;
};

const Breadcrumb = (prop: { breadcrumb: BreadcrumbItem[] }) => {
  const breadcrumbList = prop.breadcrumb;
  return (
    <div className="breadcrumbs">
      <ul>
        {breadcrumbList.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link href={item.link}>
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
