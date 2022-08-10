
import { Link } from "react-router-dom";

function Blog() {
    return (
        <div>
            <h1>Halaman Blog</h1>
            <ul>
                <li><Link to="article-1">article 1</Link></li>
                <li><Link to="article-2">article 2</Link></li>
                <li><Link to="article-3">article 3</Link></li>
            </ul>
        </div>
    )
}

export default Blog;
