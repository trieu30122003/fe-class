import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Home"; // Changed to Home
import ExitToAppIcon from "@mui/icons-material/PowerSettingsNew"; // Changed to PowerSettingsNew
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/PersonAdd'; // Changed to PersonAdd
import ManOutlinedIcon from '@mui/icons-material/PeopleOutline'; // Changed to PeopleOutline
import ScoreIcon from '@mui/icons-material/Grade'; // Added a new icon for Score
import ClassIcon from '@mui/icons-material/Class'; // Added a new icon for Class
import ScheduleIcon from '@mui/icons-material/Schedule'; // Added a new icon for Schedule
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: '#003366', color: 'yellow' }}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color: 'yellow' }}>
          <span className="logo">APTECH</span>
        </Link>
      </div>
      <hr style={{ border: '1px solid black', margin: '0 auto', width: '80%' }} />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" style={{ color: 'yellow' }} />
            <span>Dashboard</span>
          </li>
          <p className="title">MANAGE</p>

          <Link to="/add-st" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <AddIcon className="icon" style={{ color: 'yellow' }} />
              <span>ADD</span>
            </li>
          </Link>
          <Link to="/add-score" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <ScoreIcon className="icon" style={{ color: 'yellow' }} />
              <span>Score</span>
            </li>
          </Link>
          <Link to="/new/" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <AddIcon className="icon" style={{ color: 'yellow' }} />
              <span>STUDENT</span>
            </li>
          </Link>
          <Link to="/class" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <ClassIcon className="icon" style={{ color: 'yellow' }} />
              <span>CLASS</span>
            </li>
          </Link>
          <Link to="/add-to-class" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <AddIcon className="icon" style={{ color: 'yellow' }} />
              <span>ADD TO CLASS</span>
            </li>
          </Link>
          <Link to="/nhan-vien/new/" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <ManOutlinedIcon className="icon" style={{ color: 'yellow' }} />
              <span>TEACHER</span>
            </li>
          </Link>
          <Link to="/schedule" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <ScheduleIcon className="icon" style={{ color: 'yellow' }} />
              <span>SCHEDULE</span>
            </li>
          </Link>
          <Link to="/subject" style={{ textDecoration: "none", color: 'yellow' }}>
            <li>
              <MenuBookIcon className="icon" style={{ color: 'yellow' }} />
              <span>Subject</span>
            </li>
          </Link>

        </ul>
      </div>
      <div style={{ marginTop: 'auto', textAlign: 'center', padding: '20px' }}>
        <Link to="/login" style={{ textDecoration: "none", color: 'yellow' }}>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ExitToAppIcon className="icon" style={{ color: 'yellow' }} />
            <span>Logout</span>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
