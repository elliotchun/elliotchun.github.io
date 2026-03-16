interface NavButtonProps {
    href: string;
    children: React.ReactNode;
    target: string;
    isActive: boolean;
}

export const NavButton = ({ href, target, children, isActive = false }: NavButtonProps) => {
    return (
        <a
            href={href}
            className={`nav-button ${isActive ? "visible" : ""}`}
            target={target}
        >
            {children}
        </a>
    )
}