import React from 'react';
import { Outlet, Link} from 'react-router-dom';
const Layout = () => {
    return (
        <div>

        
                <nav>
                    <h1>mon layout</h1>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/blog"}>Blogs</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>

                </nav>
                <Outlet/>
        </div>
    );
}

export default Layout;
