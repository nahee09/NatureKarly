import React, { useState } from 'react';

import classes from './Menu.module.css';

export function Menu(props) {
  const menuList = props.menuList;
  const [dropDown, setDropDown] = useState(false);

  function handleMouseOver() {
    setDropDown(true);
  }

  function handleMouseLeave(e) {
    if (
      !e.relatedTarget ||
      (e.target.className !== 'menuList' && e.relatedTarget.className !== 'menuList')
    ) {
      setDropDown(false);
    }
  }

  return (
    
    <div className={classes.menuWrapper} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <button className={classes.menu}>
        카테고리
      </button>
      {dropDown && (
        <ul className={`${classes.menuList}`}>
          {menuList.map((item) => (
              <li key={item.id}>
                <a href="#">{item.text}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}