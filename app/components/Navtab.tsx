import Link from "next/link";

interface NavtabProps {
  title: string;
}

const hrefMap: Record<string, string> = {
  Home: "/",
  About: "/about",
  Blog: "/blog",
  Photography: "/photography",
  Contact: "/contact",
};

export default function Navtab({ title }: NavtabProps) {
  const href = hrefMap[title] ?? `/${title.toLowerCase()}`;
  return (
    <div className="flex items-center justify-center flex-1 h-full font-extrabold hover:text-[#2EA7F2] transition-colors">
      <Link href={href}>{title}</Link>
    </div>
  );
}