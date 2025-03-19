import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your state and event work goes here

  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = (event) => {
    const newCriteria = event.currentTarget.name;

    if (sortByCriteria !== newCriteria) {
      setSortByCriteria(newCriteria);
      setIsAscending(true);
    } else {
      if (isAscending) {
        setIsAscending(false);
      } else {
        setSortByCriteria(null);
        setIsAscending(null);
      }
    }
  };

  let sortedData = props.data;
  if (sortByCriteria) {
    sortedData = _.sortBy(props.data, [sortByCriteria]);
    if (!isAscending) {
      sortedData = _.reverse(sortedData);
    }
  }

  //Map the `props.data` value into an array of `<GameDataRow>` elements here
  // let sortedData = props.data;

  const gameRows = sortedData.map(gameObj => (
    <GameDataRow key={gameObj.year} gameObj={gameObj} />
  ));

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" onClick={handleClick} active={sortByCriteria === 'year'} ascending={sortByCriteria === 'year' && isAscending} />
            </th>
            <th className="text-end" >
              Winner
              <SortButton name="winner" onClick={handleClick} active={sortByCriteria === 'winner'} ascending={sortByCriteria === 'winner' && isAscending} />
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" onClick={handleClick} active={sortByCriteria === 'score'} ascending={sortByCriteria === 'score' && isAscending} />
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" onClick={handleClick} active={sortByCriteria === 'runner_up'} ascending={sortByCriteria === 'runner_up' && isAscending} />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* render the array of <GameDataRow> elements here */}
          {gameRows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = "material-icons"
  if (props.active) { iconClasses += ` active` };
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );

}

function GameDataRow({ gameObj }) { //gameObj = props.gameObj
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td className="text-end">{gameObj.winner} {gameObj.winner_flag}</td>
      <td className="text-center">{gameObj.score}</td>
      <td>{gameObj.runner_up_flag}&nbsp;&nbsp;{gameObj.runner_up}</td>
    </tr>
  );
}
