interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export const Subtitle = ({
    children,
    ...rest
}: SubtitleProps) => {
    return (
        <p className="subtitle" {...rest}>
            {children}
        </p>
    );
}