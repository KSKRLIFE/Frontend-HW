import { useState, useEffect } from "react";
import "./Search.css";
export default function Search() {
  const url = "https://thronesapi.com/api/v2/Characters";
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searched, setSearched] = useState(false); // new state variable
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = characters.filter(
      (character) =>
        character.fullName.toLowerCase().includes(query) ||
        character.title?.toLowerCase().includes(query)
    );
    setFilteredCharacters(filtered);
  };
  const handleSearchButtonClick = () => {
    setSearched(true);
  };
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search for favourite characters"
          onChange={handleSearch}
          className="search"
        />
        <button className="btn" onClick={handleSearchButtonClick}>
          Search
        </button>
      </div>
      {searched && (
        <div>
          {filteredCharacters.length === 0 ? (
            <div>Search did not match any character names.</div>
          ) : (
            <div className="search-results">
              {filteredCharacters.map((character) => (
                <div className="character-card" key={character.id}>
                  <img src={character.imageUrl} alt={character.fullName} />
                  <h3>{character.fullName}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
