import classes from './Nav.module.css';
import { Menu } from '../Menu/Menu';
// import PropTypes from 'prop-types';

export function Navigation(){
  return(
    <nav className={classes.nav}>
      <Menu></Menu>
    </nav>
  );
}