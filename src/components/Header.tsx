interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
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
    else if (sz === 3) {
        return (
            <h3 {...rest}>
                {children}
            </h3>
        )
    }
    return (
        <h1 {...rest}>
            {children}
        </h1>
    );
}