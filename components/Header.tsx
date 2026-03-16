interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    sz: number;
}

export const Header = ({
    children,
    sz,
    ...rest
}: HeaderProps) => {
    if (sz === 1) {
        return (
            <h1 {...rest}>
                {children}
            </h1>
        )
    }
    else if (sz === 2) {
        return (
            <h2 {...rest}>
                {children}
            </h2>
        )
    }
    return (
        <h1 {...rest}>
            {children}
        </h1>
    );
}