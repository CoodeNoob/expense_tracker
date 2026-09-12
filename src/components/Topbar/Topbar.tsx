import "./Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <header className="topbar_container">
        <div className="current_tab">
            Dashboard
        </div>
        <div className="topbar_action_container">
            <div className="current_date_time">
                {today}
            </div>
            <div className="profile">
                <FontAwesomeIcon icon={faUser}/>
            </div>
        </div>
    </header>
  );
}

export default Topbar;
