import { Link } from 'react-router-dom';
import '../styles/TitleHeader.scss';

const TitleHeader = ({ title }) => {
  return (
    <div className="title-header">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list" className="view-employees">
          View Current Employees
        </Link>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default TitleHeader;
