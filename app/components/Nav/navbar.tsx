
import { navItems } from "@/app/data/navItems";
import styles from "./navbar.module.css";

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-2 px-10">
            <div className="flex gap-6 px-6 py-4">
                <img src="/img/sun.png" alt="Logo" className="w-20" />
                <div className="flex-auto">

                </div>
                <ul className="flex gap-6 justify-center items-center">
                    {navItems.map((item) => (
                        <li 
                            key={item.id}
                            // onClick={() => refs[item.id].current?.scrollIntoView({ behavior: "smooth" })}
                            className={`cursor-pointer text-[20px] ${styles.link}`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}