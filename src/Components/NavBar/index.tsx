import route from "../../route";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ height: "100vh", background: "#F5F5F5", paddingRight: 20, overflow: 'auto' }}>
      <ol>
        {route.map((r) => (
          <li key={r.path}>
            <NavLink to={r.path}>{r.name}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NavBar;
