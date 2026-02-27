export const App = () => {
    return (
        <>
            <header id="home">
                <h1 id="name-header">Elliot Chun</h1>
                <p className="subtitle">Full-Stack Developer & Software Engineer</p>
            </header>
            <nav>
                <button className="nav-reveal">≡</button>
                <a href="#home">
                    <button className="nav-button" data-target="home">Top of page</button>
                </a>
                <a href="#projects">
                    <button className="nav-button" data-target="projects">Projects</button>
                </a>
                <a href="#experience">
                    <button className="nav-button" data-target="experience">Experience</button>
                </a>
            </nav>
            <main>
                <section id="projects" className="fade-in">
                    <div className="section-header">
                        <h2>Featured Projects</h2>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-column">
                            <article className="portfolio-item fade-in stagger-2">
                                <h3>LLM Context Enhancement</h3>
                                <p>Enhancement of an LLM to expand its domain expertise with specialized knowledge.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">LangChain</span>
                                    <span className="tech-tag">ChromaDB</span>
                                    <span className="tech-tag">LLMs</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/elliotchun/rag-llm-enhancement">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                            <article className="portfolio-item fade-in stagger-1">
                                <h3>IMDB Movie Classification</h3>
                                <p>Machine learning project for movie review sentiment analysis using multiple prediction
                                    models.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">scikit-learn</span>
                                    <span className="tech-tag">Pandas</span>
                                    <span className="tech-tag">NumPy</span>
                                    <span className="tech-tag">PyTorch</span>
                                    <span className="tech-tag">NLTK</span>
                                </div>
                            </article>
                            <article className="portfolio-item fade-in stagger-5">
                                <h3>Digital Marketplace Analyzer</h3>
                                <p>A Python software suite for automatically fetching market information. Allows users to browse
                                    and analyze listings in real time and predicts prices using various prediction models.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">HTTP</span>
                                    <span className="tech-tag">Statistics</span>
                                    <span className="tech-tag">PyTorch</span>
                                    <span className="tech-tag">Machine Learning</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/elliotchun/wf-market-tool">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="portfolio-column">
                            <article className="portfolio-item fade-in stagger-4">
                                <h3>CLIDE Campus Platform</h3>
                                <p>A cross-platform application that helps users coordinate, advertise, and browse campus
                                    activities.
                                </p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Figma</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Tailwind</span>
                                    <span className="tech-tag">TypeScript</span>
                                    <span className="tech-tag">UI/UX Design</span>
                                    <span className="tech-tag">Frontend</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://heartfelt-empanada-88810e.netlify.app/">View App
                                    </a>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/elliotchun/clide-campus-groups">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                            <article className="portfolio-item fade-in stagger-3">
                                <h3>UCI Search Engine</h3>
                                <iframe src="https://www.youtube.com/embed/bJmg-3r0xXY" allowFullScreen={false}></iframe>
                                <p>A full-stack web application enabling document search across UCI Computer Science websites,
                                    featuring advanced indexing with duplicate detection, PageRank algorithm, and anchor text
                                    extraction.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Angular</span>
                                    <span className="tech-tag">TypeScript</span>
                                    <span className="tech-tag">Golang</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">AWS</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">Bun</span>
                                    <span className="tech-tag">Full-stack</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/cjcho03/cjcho03-cs121_A3">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="portfolio-column">
                            <article className="portfolio-item fade-in stagger-3">
                                <h3>MCP Server</h3>
                                <p>MCP server that serves information from EDHREC.com, enhancing LLMs/AI agents with up-to-date
                                    statistics and information.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">FastMCP</span>
                                    <span className="tech-tag">JSON</span>
                                    <span className="tech-tag">LLMs</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/elliotchun/edhrec-mcp">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                            <article className="portfolio-item fade-in stagger-2">
                                <h3>Movie Database Web App</h3>
                                <p>A full-stack web application serving comprehensive movie information from a database with
                                    cloud deployment and containerization.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">HTML/CSS</span>
                                    <span className="tech-tag">Bootstrap</span>
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">Java</span>
                                    <span className="tech-tag">AWS</span>
                                    <span className="tech-tag">Docker</span>
                                    <span className="tech-tag">Kubernetes</span>
                                    <span className="tech-tag">Full-stack</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://hub.docker.com/r/eschun/cs122b-p5/">
                                        View Docker Hub
                                    </a>
                                </div>
                            </article>
                            <article className="portfolio-item fade-in stagger-1">
                                <h3>Wiki Software</h3>
                                <p>An implementation of server-side rendering that dynamically renders web pages from JSON data.
                                </p>
                                <div className="tech-stack">
                                    <span className="tech-tag">HTML/CSS</span>
                                    <span className="tech-tag">TypeScript</span>
                                    <span className="tech-tag">Elysia</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">Backend</span>
                                </div>
                                <div className="external-link">
                                    <a href="https://github.com/elliotchun/relic-wiki-server">
                                        View Source Code
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="experience" className="fade-in">
                    <div className="section-header">
                        <h2>Professional Experience</h2>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-column-full">
                            <div className="portfolio-item fade-in stagger-2">
                                <h3>BLSVP Platform</h3>
                                <p>Implemented an accessible full-stack directory of tools dedicated to indexing tools used by
                                    Blind and Low-Vision Software Professionals.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Express.js</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">Bun</span>
                                    <span className="tech-tag">Accessible Design</span>
                                    <span className="tech-tag">Chakra UI</span>
                                </div>
                            </div>

                            <div className="portfolio-item fade-in stagger-2">
                                <h3>Beckman Laser Institute</h3>
                                <p>Dramatically improved OCT scan display performance from 10 fps to 100 fps through
                                    optimization techniques. Developed a comprehensive Python alignment application for
                                    realignment of OCT images.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">.NET Framework</span>
                                    <span className="tech-tag">C++</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">UI/UX Design</span>
                                    <span className="tech-tag">Performance Optimization</span>
                                    <span className="tech-tag">Medical Imaging</span>
                                    <span className="tech-tag">OCT Systems</span>
                                </div>
                            </div>
                            <div className="portfolio-item fade-in stagger-1">
                                <h3>Ambient Studios</h3>
                                <p>Enhanced mobile application user experience and optimized backend infrastructure for employee
                                    time tracking systems, improving system interface and user satisfaction.</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Mobile Development</span>
                                    <span className="tech-tag">Backend Systems</span>
                                    <span className="tech-tag">CX Enhancement</span>
                                    <span className="tech-tag">Time Tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}