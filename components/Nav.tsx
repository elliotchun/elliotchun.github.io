import { useState } from "react";
import { NavButton } from "./NavButton";
import { MdCircle, MdKeyboardArrowUp, MdSquare } from "react-icons/md";

interface NavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

export const Nav = ({ ...rest }: NavProps) => {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active);
    }

    const navItems = [
        { href: "#home", label: "Top of page", target: "home", icon: MdKeyboardArrowUp },
        { href: "#projects", label: "Projects", target: "projects", icon: MdSquare },
        { href: "#experience", label: "Experience", target: "experience", icon: MdCircle },
    ];

    return (
        <nav {...rest}>
            <button
                className={`nav-reveal ${active ? "active" : ""}`}
                aria-label="Toggle navigation"
                type="button"
                onClick={toggleNav}
            >
                ≡
            </button>
            {navItems.map((item, index) => (
                <NavButton
                    key={index}
                    href={item.href}
                    target={item.target}
                    isActive={active}
                >
                    <item.icon />
                    {item.label}
                </NavButton>
            ))}
        </nav>
    );
};