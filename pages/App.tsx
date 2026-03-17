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
        <div className="grid grid-cols-10 grid-rows-1">
            <div className="columns-1 bg-(--gray-1) rounded-4xl m-1 pl-2">
                <Nav className="fixed mt-4" />
            </div>
            <div className="col-span-9">
                <div className="flex flex-col items-center bg-(--white-2) rounded-4xl m-1 p-4">
                    <Header id="home" sz={1} className="name-header">
                        Elliot Chun
                    </Header>
                    <Subtitle className="text-(--gray-6)">
                        Full-Stack Developer & AI Engineer
                    </Subtitle>
                </div>
                <main className="p-4">
                    <section id="projects">
                        <Header sz={2} className="font-semibold">Featured Projects</Header>
                        <div className="grid grid-cols-3 auto-rows-fr gap-4">
                            <div className="grid auto-rows-min grid-cols-1 gap-4">
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
                            <div className="grid auto-rows-min grid-cols-1 gap-4">
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
                            <div className="grid auto-rows-min grid-cols-1 gap-4">
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
                        <Header sz={2} className="font-semibold">
                            Professional Experience
                        </Header>
                        <div className="grid grid-rows-3 gap-4">
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