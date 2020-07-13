import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "./firebase";

const Fundations = () => {
  const firebase = useContext(FirebaseContext);
  const [help, setHelp] = useState("Fundations");
  const [fun, setFun] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (help === "Fundations") {
      firebase.fundations.on("value", (snap) => {
        setFun(snap.val().Fundations);
      });
    } else if (help === "Organizations") {
      firebase.fundations.on("value", (snap) => {
        setFun(snap.val().Organizations);
      });
    } else if (help === "collection") {
      firebase.fundations.on("value", (snap) => {
        setFun(snap.val().collection);
      });
    }
  }, [help]);

  const indexOfLastPost = currentPage * 3;
  const indexOfFirstPost = indexOfLastPost - 3;
  const currentFun = fun.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(fun.length / 3); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fundations" id="fundations">
      <h1>Komu pomagamy?</h1>
      <div className="decoration"></div>
      <div className="fundations-type">
        <h2
          onClick={() => setHelp("Fundations")}
          style={{ border: help === "Fundations" && "0.75px solid #3C3C3C" }}
        >
          Fundacjom
        </h2>
        <h2
          onClick={() => setHelp("Organizations")}
          style={{ border: help === "Organizations" && "0.75px solid #3C3C3C" }}
        >
          Organizacjom pozarządowym
        </h2>
        <h2
          onClick={() => setHelp("collection")}
          style={{ border: help === "collection" && "0.75px solid #3C3C3C" }}
        >
          Lokalnym zbiórkom
        </h2>
      </div>
      <div className="fundations-desc">
        {help === "Fundations" && (
          <p>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        )}
        {help === "Organizations" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        )}
        {help === "collection" && (
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>
        )}
      </div>
      <div className="fundations-lists">
        <ul>
          {currentFun.map((el, i) => (
            <li key={i}>
              <h3>
                {el.name}
                <span>{el.goal}</span>
              </h3>
              <p>{el.things}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        {fun.length > 3 &&
          pageNumbers.map((nr) => (
            <button key={nr} onClick={() => setCurrentPage(nr)}>
              {nr}
            </button>
          ))}
      </div>
    </div>
  );
};

export { Fundations };
