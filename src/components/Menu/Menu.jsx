import React, { useState } from 'react';

import classes from './Menu.module.css';

export function Menu(props) {
  const menuList = props.menuList;
  const [dropDown, setDropDown] = useState(false);

  function handleMouseOver() {
    setDropDown(true);
  }

  function handleMouseLeave(e) {
      setDropDown(false);
    }
  }

  return(
    <>
      <button className={classes.menu} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
      
    </>
  );
}