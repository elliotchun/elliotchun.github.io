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
        <article className="portfolio-item">
            <Header sz={3}>{title}</Header>
            <p>{description}</p>
            <div className="skill-tag-container">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
            {links.map((link, index) => (
                <div key={index} className="external-link">
                    <a href={link.href}>
                        {link.text}
                    </a>
                </div>
            ))}
        </article>
    )
}