import React, { useEffect, useState } from "react";
import "./GenreComponet.css";
const GenreComponet = () => {
  const [genre, setgenre] = useState([]);
  let usercategory = localStorage.getItem("usercategory");
  let usercategoryarr = JSON.parse(usercategory);
  // console.log(Category);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDJjMjYxODY3Y2UzNzMzY2NkMGQ0ZDg2ZDFhZjViZSIsInN1YiI6IjY1M2I3MjM5NzE5YWViMDEzODdiZDMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QxvRkVEcKvHpHHl3EPu7Bw08QzaAnSBv9YSSl6Pnv1E",
      },
    };
    try {
      const response1 = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=us&sort_by=popularity.desc&with_genres=28%7C18%7C10749%7C53%7C37%7C27%7C14%7C10402%7C35",
        options
      );
      const data1 = await response1.json();

      const response2 = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&region=us&sort_by=popularity.desc&with_genres=28%7C18%7C10749%7C53%7C37%7C27%7C14%7C10402%7C35",
        options
      );
      const data2 = await response2.json();

      const response3 = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&region=us&sort_by=popularity.desc&with_genres=28%7C18%7C10749%7C53%7C37%7C27%7C14%7C10402%7C35",
        options
      );
      const data3 = await response3.json();

      setgenre((prevGenre) => [
        ...prevGenre,
        ...data1.results,
        ...data2.results,
        ...data3.results,
      ]);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(genre);

  function findgenreid(item) {
    if (item === "Action") {
      return 28;
    } else if (item === "Drama") {
      return 18;
    } else if (item === "Romance") {
      return 10749;
    } else if (item === "Thriller") {
      return 53;
    } else if (item === "Western") {
      return 37;
    } else if (item === "Horror") {
      return 27;
    } else if (item === "Fantasy") {
      return 14;
    } else if (item === "Music") {
      return 10402;
    } else if (item === "Fiction") {
      return 16;
    }
  }
  let genre_id;
  let count = 0;
  return (
    <div className="maindivgenre">
      <p className="heading">Entertainment according to your choice</p>
      <div style={{ height: "90%", overflowY: "scroll" }}>
        {usercategoryarr.map((item) => {
          genre_id = findgenreid(item);
          count = 0;

          return (
            <div style={{ textAlign: "left" }}>
              <p className="categoryName">{item}</p>
              {genre.map((item) =>
                item.genre_ids.includes(genre_id) && count < 4
                  ? (count++,
                    (
                      <img
                        className="posterImg"
                        src={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                        alt="img data"
                      />
                    ))
                  : null
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreComponet;
