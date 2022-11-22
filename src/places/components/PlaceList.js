import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Card style={{ marginTop: 50 }}>
        <h1>No places found. Maybe create one?</h1>
        <Link to="/places/new">
          <button>Share place</button>
        </Link>
      </Card>
    );
  } else {
    return (
      <ul className="place-list">
        {items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        ))}
      </ul>
    );
  }
};

export default PlaceList;
