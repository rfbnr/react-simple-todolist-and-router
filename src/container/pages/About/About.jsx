
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <h1>Halaman About</h1>
            <div>
                <li><Link to="team">About Team</Link></li>
            </div>
            <Outlet/>
        </>
    )
};

export default About;
