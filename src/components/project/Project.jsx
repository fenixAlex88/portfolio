import {Link} from "react-router-dom"
import './style.css';

const Project = ({title, img, id}) => {
  return (
    <li className="project">
      <Link to={`/project/${id}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
};

export default Project;
