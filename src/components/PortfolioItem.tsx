import { Header } from "../components/Header";

interface Link {
    href: string;
    text: string;
}

interface PortfolioItemProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    description: string;
    skills: string[];
    links?: Link[];
}

export const PortfolioItem = ({
    title,
    description,
    skills,
    links = [],
    ...rest
}: PortfolioItemProps) => {
    return (
        <article className="flex flex-col items-start portfolio-item bg-(--yellow-1) rounded-4xl p-4 font-medium">
            <Header sz={3}>{title}</Header>
            <p>{description}</p>
            {links.map((link, index) => (
                <div key={index} className="external-link">
                    <a href={link.href}>
                        {link.text}
                    </a>
                </div>
            ))}
            <div className="flex flex-wrap gap-2 text-sm mt-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-(--yellow-5) rounded-lg px-3 py-1">{skill}</span>
                ))}
            </div>
        </article>
    )
}