import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Subtitle } from "../components/Subtitle"
import { PortfolioItem } from "../components/PortfolioItem"
import PROJECTS from "../projects.json"

export const App = () => {
    const [i_0, i_1] = [Math.ceil(PROJECTS.length / 3), Math.ceil(PROJECTS.length / 3 * 2)]
    const [pItems0, pItems1, pItems2] = [
        PROJECTS.slice(0, i_0),
        PROJECTS.slice(i_0, i_1),
        PROJECTS.slice(i_1, PROJECTS.length)
    ]

    return (
        <div className="page-layout">
            <div className="nav-container rounded">
                <Nav className="nav" />
            </div>
            <div className="main-container">
                <div className="main-header-container rounded">
                    <Header id="home" sz={1} className="name-header">
                        Elliot Chun
                    </Header>
                    <Subtitle>
                        Full-Stack Developer & AI Engineer
                    </Subtitle>
                </div>
                <main className="main-content">
                    <section id="projects">
                        <Header sz={2} className="semibold">Featured Projects</Header>
                        <div className="portfolio-column-container">
                            <div className="portfolio-column">
                                {pItems0.map((pItem, i) => (
                                    <PortfolioItem
                                        title={pItem.title}
                                        description={pItem.description}
                                        skills={pItem.skills}
                                        links={pItem.links}
                                        key={i}
                                    />
                                ))}
                            </div>
                            <div className="portfolio-column">
                                {pItems1.map((pItem, i) => (
                                    <PortfolioItem
                                        title={pItem.title}
                                        description={pItem.description}
                                        skills={pItem.skills}
                                        links={pItem.links}
                                        key={i}
                                    />
                                ))}
                            </div>
                            <div className="portfolio-column">
                                {pItems2.map((pItem, i) => (
                                    <PortfolioItem
                                        title={pItem.title}
                                        description={pItem.description}
                                        skills={pItem.skills}
                                        links={pItem.links}
                                        key={i}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="experience">
                        <Header sz={2} className="semibold">
                            Professional Experience
                        </Header>
                        <div className="experience-column-container">
                            <PortfolioItem
                                title="BLVSP Platform"
                                description="Implemented an accessible directory of tools dedicated to indexing tools used by Blind and Low-Vision Software Professionals."
                                skills={["React", "Express.js", "MongoDB", "Better-Auth", "Accessibility - WCAG 2.0", "Chakra UI"]}
                            />
                            <PortfolioItem
                                title="Biomedical Imaging Lab - Beckman Laser Institute"
                                description="Improved OCT scan display performance from 10 Hz to 100 Hz. Developed a Python system for realignment of OCT images used in an ML training pipeline."
                                skills={[".NET Framework", "C++", "Python"]}
                            />
                            <PortfolioItem
                                title="Ambient Studios"
                                description="Enhanced mobile application user experience and optimized backend infrastructure for employee time tracking systems, improving system interface and user satisfaction."
                                skills={["UI/CX Design", "Mobile Development", "Azure Functions"]}
                            />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}