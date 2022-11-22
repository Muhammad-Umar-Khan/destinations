import "./usersList.css";

import UserItem from "./userItem";
import Card from "../../shared/components/UIElements/Card";
const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found</h1>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placesCount={user.places}
          />
        ))}
      </ul>
    );
  }
};

export default UsersList;
