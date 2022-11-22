import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
const places = [
  {
    id: "u1",
    title: "Empire state building",
    description: "A famous skyscraper",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "u2",
    title: "Canada Flag waving over lake Ontario",
    description:
      "Lake Ontario is one of the five Great Lakes of North America. It is surrounded on the north, west, and southwest by the Canadian province of Ontario",
    imageUrl:
      "https://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?s=612x612&w=0&k=20&c=0dsOXraklB5DCLYeYVpmDxfgquLlVSalCcHacs0LgTY=",
    address: "Vancouver, BC V6T 1Z4, Canada",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().uid;
  const myPlaces = places.filter((place) => place.creator === userId);
  return <PlaceList items={myPlaces} />;
};

export default UserPlaces;
