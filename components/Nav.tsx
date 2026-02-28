export const Nav = () => {
    return (
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
    );
}