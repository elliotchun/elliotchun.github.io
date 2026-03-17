import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Subtitle } from "../components/Subtitle"
import { PortfolioItem } from "../components/PortfolioItem"

export const App = () => {
    return (
        <>
            <Header id="home" sz={1}>
                Elliot Chun
            </Header>
            <Subtitle>
                Full-Stack Developer & AI Engineer
            </Subtitle>
            <Nav />
            <main>
                <section id="projects">
                    <div className="section-header">
                        <Header sz={2}>Featured Projects</Header>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-column">
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
                        <div className="portfolio-column">
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
                        <div className="portfolio-column">
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
                    <Header sz={2}>
                        Professional Experience
                    </Header>
                    <div className="portfolio-grid">
                        <div className="portfolio-column-full">
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
                    </div>
                </section>
            </main>
        </>
    )
}