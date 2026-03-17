interface NavButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    className: string;
    isActive?: boolean;
}

export const NavButton = ({ href, children, className, isActive = false, ...rest }: NavButtonProps) => {
    return (
        <a
            href={href}
            className={`nav-button ${className}`}
            {...rest}
        >
            {children}
        </a>
    )
}