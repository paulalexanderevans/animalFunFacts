import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const displayFact = (e) => {
    const selectedAnimal = e.target.alt;
    const randomIndex = Math.floor(
        Math.random() * animals[selectedAnimal].facts.length
    );
    const funFact = animals[selectedAnimal].facts[randomIndex];
    document.getElementById("fact").innerHTML = funFact;
};

const images = [];
for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={(e) => displayFact(e)}
        />
    );
}
const title = "";
const background = <img src="/images/ocean.jpg" />;
const animalFacts = (
    <div>
        <h1>{title === "" ? "‘Click an animal for a fun fact’" : title}</h1>
        {background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
