import Navtab from "./Navtab";
const nav = [
    'Home',
    'About',
    'Projects',
    'Photography',
    'Contact'
];

export default function Navbar() {
    return (
        <>
            <nav className="flex h-[10vh]">
               {nav.map((title: string) => <Navtab key={title} title={title} />)}
            </nav>
        </>
    )
}