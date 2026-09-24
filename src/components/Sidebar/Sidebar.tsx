import "./Sidebar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartPie,
  faWallet,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`side_bar${isCollapsed ? " collapsed" : ""}`} aria-label="Main navigation">
      <div className="sidebar-brand">
        <div className="brand_head">
          <span className="brand-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faWallet} />
          </span>
          <span className="brand-name">Tracker</span>
        </div>
        <button
          className="sidebar_control"
          type="button"
          onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} />
        </button>
      </div>

      <nav>
        <p className="menu-label">Menu</p>
        <ul className="sidebar_menu_list">
          <li>
            <button className="menu active" type="button" aria-current="page" aria-label="Dashboard" title="Dashboard">
              <span className="icon" aria-hidden="true">
                <FontAwesomeIcon icon={faChartPie} />
              </span>
              <span className="name">Dashboard</span>
            </button>
          </li>
          <li>
            <button className="menu" type="button" aria-label="Expenses" title="Expenses">
              <span className="icon" aria-hidden="true">
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <span className="name">Expenses</span>
            </button>
          </li>
        </ul>
      </nav>

      <ul className="action_menu_list">
        <li>
          
          <Link to="/login" className="action" type="button" aria-label="Logout" title="Logout">
            <span className="action_icon" aria-hidden="true">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span className="action_name">Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
