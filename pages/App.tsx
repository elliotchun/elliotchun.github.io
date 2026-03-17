import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Subtitle } from "../components/Subtitle"
import { PortfolioItem } from "../components/PortfolioItem"

export const App = () => {
    return (
        <div className="grid grid-cols-8 grid-rows-1">
            <div className="columns-1 pl-2">
                <Nav className="fixed" />
            </div>
            <div className="col-span-7">
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
                                <PortfolioItem
                                    title="LLM RAG Enhancement"
                                    description="Enhancement of an LLM to expand its domain expertise with specialized knowledge."
                                    skills={["Python", "ChromaDB", "LLMs"]}
                                    links={[
                                        {
                                            href: "https://github.com/elliotchun/rag-llm-enhancement",
                                            text: "View source code"
                                        },
                                    ]}
                                />
                                <PortfolioItem
                                    title="IMDB Movie Classification"
                                    description="Created multiple NLP models for movie review sentiment analysis."
                                    skills={["Python", "scikit-learn", "Pandas", "NumPy", "PyTorch", "NLTK"]}
                                />
                                <PortfolioItem
                                    title="Digital Marketplace Analyzer"
                                    description="A Python software suite for fetching market information. Allows users to browse and analyze listings in real time and predicts prices using various prediction models."
                                    skills={["Python", "HTTP", "PyTorch", "Machine Learning"]}
                                    links={[
                                        {
                                            href: "https://github.com/elliotchun/wf-market-tool",
                                            text: "View source code",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="grid auto-rows-min grid-cols-1 gap-4">
                                <PortfolioItem
                                    title="Clide - Campus Platform"
                                    description="A cross-platform application that helps users coordinate, advertise, and browse campus activities."
                                    skills={["Figma", "React", "Tailwind CSS", "MongoDB"]}
                                    links={[
                                        {
                                            href: "https://heartfelt-empanada-88810e.netlify.app/",
                                            text: "View app",
                                        },
                                        {
                                            href: "https://github.com/elliotchun/clide-campus-groups",
                                            text: "View source code",
                                        }
                                    ]}
                                />
                                <PortfolioItem
                                    title="UCI Search Engine"
                                    description="A full-stack web application enabling document search across UCI Computer Science websites, featuring indexing with duplicate detection, PageRank algorithm, and anchor text extraction."
                                    skills={["Angular", "TypeScript", "GoLang", "Python"]}
                                    links={[
                                        {
                                            href: "https://www.youtube.com/embed/bJmg-3r0xXY",
                                            text: "Demo video",
                                        },
                                        {
                                            href: "https://github.com/cjcho03/cjcho03-cs121_A3",
                                            text: "View source code",
                                        }
                                    ]}
                                />
                            </div>
                            <div className="grid auto-rows-min grid-cols-1 gap-4">
                                <PortfolioItem
                                    title="MCP Server"
                                    description="MCP server that serves information from EDHREC.com, enhancing LLMs/AI agents with up-to-date statistics and information."
                                    skills={["Python", "FastMCP", "LLMs"]}
                                    links={[
                                        {
                                            href: "https://github.com/elliotchun/edhrec-mcp",
                                            text: "View source code",
                                        },
                                    ]}
                                />
                                <PortfolioItem
                                    title="Movie Database Web App"
                                    description="A full-stack web application serving comprehensive movie information from a database with cloud deployment and containerization."
                                    skills={["HTML/CSS", "Bootstrap", "JavaScript", "Java", "Docker", "Kubernetes", "AWS EC2"]}
                                    links={[
                                        {
                                            href: "https://hub.docker.com/r/eschun/cs122b-p5/",
                                            text: "View Docker Hub",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </section>

                    <section id="experience">
                        <Header sz={2} className="font-semibold">
                            Professional Experience
                        </Header>
                        <div className="grid grid-rows-3 gap-4 pr-24">
                            <PortfolioItem
                                title="BLVSP Platform"
                                description="Implemented an accessible full-stack directory of tools dedicated to indexing tools used by Blind and Low-Vision Software Professionals."
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