import Search from "./Search";
import { useState } from "react";

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  const people = [
    "Robert",
    "Lori",
    "Lee",
    "Beth",
    "Sarah",
    "Tim",
    "Rebecca",
    "Sharon",
    "Dan",
    "Jacob",
    "Kaelei",
    "Declan",
    "Benjamin",
    "Melissa"
  ];

  const displayNames = people.map((person) => {
    return(
      <li>{person}</li>
    )
  })

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery);
    people.map((person) => {
      if (person.includes(searchQuery)){
        setFilteredName(person)
      }
    })
  }

  return (
    <div className="App">
    
      <Search handleSearch={handleSearch} />
    <h2>Filtered Name:
      <ul style={{color:"red"}}>
        {filteredName}
      </ul>
    </h2>
    <h2>Names Array:</h2>
    <ul>{displayNames}</ul>
    </div>
  );
}

export default App;
