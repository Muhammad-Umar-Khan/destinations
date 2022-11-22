import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import "./userItem.css";

const UserItem = ({ id, name, image, placesCount }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placesCount} {placesCount > 1 ? "Places" : "Place"}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
