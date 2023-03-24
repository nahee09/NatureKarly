

import classes from './Menu.module.css';

export function Menu(props) {
  const menuList = props.menuList;
  
  return(
    <>
      <button className={classes.menu}>
        카테고리
      </button>
      <ul className={`${classes.menuList} ${classes.hidden}`}>
        {menuList.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
      </ul>
    </>
  );
}