import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../badge/Badge';
import './AddButtonList.scss';

const AddButtonList = ({ colors }) => {
  const [isVisiblePopop, setIsVisiblePopop] = useState(false);
  const [selectColor, setSelectColor] = useState(null);
  return (
    <div className="add-list">
      <List
        onClick={() => setIsVisiblePopop(!isVisiblePopop)}
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="list__add-button"
              >
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            name: 'Добавить в список',
          },
        ]}
      />
      {isVisiblePopop && (
        <div className="add-list__popup">
          <input className="field" type="text" placeholder="Название списка" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => setSelectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
