import Link from "next/link";

interface NavtabProps {
    title: string;
}

export default function Navtab({title}: NavtabProps) {
    return (
        <div className="flex items-center justify-center flex-1 h-full font-extrabold hover:text-[#2EA7F2]">
            <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        </div>
    )
}