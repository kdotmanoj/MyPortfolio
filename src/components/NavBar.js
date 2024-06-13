import './NavBar.css';
function NavBar(){
    return (
        <nav>
            <ul className="navbar">
                <li class="nav-item"><a href={"/home"}>Home</a></li>
                <li class="nav-item"><a href={"/about"}>About</a></li>
                <li class="nav-item"><a href={"/project"}>Project</a></li>
                <li class="nav-item"><a href={"/resume"}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;