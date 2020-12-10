import React, { useEffect, useState } from "react";
import { Form } from "./form";
import { UsersList } from "./usersList";
// import { UserContext } from "./UserContext";

export const Main = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (query === "") {
          setUsers(undefined);
          return;
        }
        const result = await fetch(
          `https://api.github.com/search/users?q=${query}`
        );
        if (!result.ok) {
          setUsers(undefined);
          return;
        }
        const data = await result.json();
        console.log(data.items);
        setUsers(data);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <div className="App">
      {/* <UserContext.Provider value={{ query, setQuery }}>
        <Form></Form>
      </UserContext.Provider> */}
      <Form setQuery={setQuery} query={query}></Form>
      <UsersList users={users} loading={loading}></UsersList>
    </div>
  );
};
