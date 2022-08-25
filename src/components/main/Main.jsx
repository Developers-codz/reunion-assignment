import React from "react";
import { DropDown } from "../../assets";
import { Filters } from "./subcomponent/Filters";
import data from "../../data/data.json"
import "./style.css";
import { Card } from "./subcomponent/Card";

export const Main = () => {
  console.log(data)
  return (
    <main className="main">
      <section className="main-head-wrapper">
        <div className="main-heading">Search properties To rent</div>
        <div className="input-wrapper">
          <input type="text" placeholder="Search with Search Bar" />
          <span>
            <DropDown />
          </span>
        </div>
      </section>
    <Filters />
    <section>
      <ul className="card-wrapper">
        {data.estate.map((es) => <Card estate={es} key={es.id} />)}
      </ul>
    </section>
    </main>
  );
};
