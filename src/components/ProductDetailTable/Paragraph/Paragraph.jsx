import classes from './Paragraph.module.css';

export const ParagraphGray = function ({ children }) {
  return <p className={classes.ParagraphGray}>{children}</p>;
};

export const ParagraphGrayLight = function ({ children }) {
  return <p className={classes.ParagraphGrayLight}>{children}</p>;
};
