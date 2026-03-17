interface NavButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    isActive?: boolean;
}

export const NavButton = ({ href, children, isActive = false, ...rest }: NavButtonProps) => {
    return (
        <a
            href={href}
            className={`nav-button ${isActive ? "visible" : ""}`}
            {...rest}
        >
            {children}
        </a>
    )
}