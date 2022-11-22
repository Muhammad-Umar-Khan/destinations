import UsersList from "../components/usersList";
const Users = () => {
  const items = [
    {
      id: "u1",
      name: "Umar",
      image:
        "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Bob",
      image:
        "https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      places: 1,
    },
  ];
  return <UsersList users={items} />;
};

export default Users;
