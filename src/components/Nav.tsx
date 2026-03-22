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
        { href: "#home", label: "Top of page", icon: MdKeyboardArrowUp },
        { href: "#projects", label: "Projects", icon: MdSquare },
        { href: "#experience", label: "Experience", icon: MdCircle },
    ];

    return (
        <nav {...rest}>
            {/* <NavButton
                href="#"
                target=""
                aria-label="Toggle navigation"
                className="flex items-center"
                onClick={toggleNav}
            >
                <span className="p-1">≡</span> Hide nav
            </NavButton> */}
            {navItems.map((item, index) => (
                <NavButton
                    key={index}
                    href={item.href}
                    isActive={active}
                    className="nav-item"
                >
                    <item.icon />
                    {item.label}
                </NavButton>
            ))}
        </nav>
    );
};