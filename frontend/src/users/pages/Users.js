import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Charles Malone",
      image:
        "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Aaron Susserman",
      image:
        "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
