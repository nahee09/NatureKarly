import classes from './InternalLinkMove.module.css';

export function InternalLinkMove({ name, to, isNumberOption }) {
  function putNumberOption(isNumberOption) {
    if (isNumberOption) {
      return <span>{'(1,000)'}</span>;
    }
  }

  return (
    <li className={classes.internalLinkMove}>
      <a className="isClicked" href={to}>
        {name}
        {putNumberOption(isNumberOption)}
      </a>
    </li>
  );
}
