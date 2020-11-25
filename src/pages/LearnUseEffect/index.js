import React, { useState, useEffect } from "react";
import "./effect.css";

const LearnUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Main">
      <p className="Text"> Learn useEffect</p>
      <p>Kelompok 30</p>
      <ul>
        {data.slice(0, 10).map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearnUseEffect;
