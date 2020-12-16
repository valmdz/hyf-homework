import React, { useContext } from "react";
import { AnswerContext } from "./main";

export const UsersList = () => {
  const answer = useContext(AnswerContext);

  if (!answer.users) {
    return <p>No users loaded</p>;
  }
  if (answer.users.items.length === 0) {
    return <p>No results</p>;
  }
  if (answer.loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {answer.users.items.map((user) => (
        <p>{user.login}</p>
      ))}
    </div>
  );
};
