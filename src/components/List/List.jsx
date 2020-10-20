import React from 'react';
import classNames from 'classnames';
import Badge from '../badge/Badge'

import './List.scss';

const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((i, index) => (
        <li key={index} className={classNames(i.className, { active: i.active })}>
          <i>{i.icon ? i.icon : <Badge color={i.color} />}</i>
          <span>{i.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
