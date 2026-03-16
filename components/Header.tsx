interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
    children: React.ReactNode;
}

export const Header = ({
    children,
    ...rest
}: HeaderProps) => {

    return (
        <header {...rest}>
            {children}
        </header>
    );
}