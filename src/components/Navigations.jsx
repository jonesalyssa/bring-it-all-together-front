import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to= "/Login"> Login </Link>
                </li>

                <li className="nav-item">
                    <Link to= "/Register"> Create Account </Link>
                </li>

                {/* <li className="nav-item">
                    <Link to= "/account"> MyAccount</Link>
                </li> */}

            </ul>
        </div>
    );
}