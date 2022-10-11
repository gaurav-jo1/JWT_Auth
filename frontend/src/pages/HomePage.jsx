import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthContext";

const HomePage = () => {
  const { authTokens } = useContext(AuthContext);
  
  const getNotes = (url, body) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer " + String(authTokens.access)
      },
      body: JSON.stringify(body),
    });

  const {
    data: notes,
    isLoading,
    isError,
  } = useQuery(["notes"], () => {
    return getNotes("http://127.0.0.1:8000/notes/").then((t) => t.json());
  });

  if (isLoading) return <h1>Loading....</h1>;

  if (isError) return <h1>Error with request</h1>;

  console.log(notes)

  return (
    <div>
      <div>You are logged to Home Page</div>
      <div>
        {notes.map((note) => {
          return (
            <ul key={note.id}>
              <li>{note.body}</li>
            </ul>
          )
        })}
      </div>
    </div>
  );
};

export default HomePage;
