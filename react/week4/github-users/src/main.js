import React, { useEffect, useState } from "react";
import { Form } from "./form";
import { UsersList } from "./usersList";

export const RequestContext = React.createContext();
export const AnswerContext = React.createContext();

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
        setUsers(data);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <div className="App">
      <RequestContext.Provider value={{ query, setQuery }}>
        <Form></Form>
      </RequestContext.Provider>
      <AnswerContext.Provider value={{ users, loading }}>
        <UsersList></UsersList>
      </AnswerContext.Provider>
    </div>
  );
};
