import React from "react";

export const UsersList = (props) => {
  if (!props.users) {
    return <p>No users loaded</p>;
  }
  if (props.users.items.length === 0) {
    return <p>No results</p>;
  }
  if (props.loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {props.users.items.map((user) => (
        <p>{user.login}</p>
      ))}
    </div>
  );
};
