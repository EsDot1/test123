import React from "react";
import { Card } from "../card/Card.component";
import "./cardList.styles.css";

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};

//passing data from parent to child component through props
//jsx in components <div> can outpot :
//jsx ---> <h1>blah blah</h1>
//components --> give them props/data & actual properties like 'key'
//can also be a value from a function cal {this.runthis()}
