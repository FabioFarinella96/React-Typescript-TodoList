import { ReactElement } from "react";
import "./styles.css";

type HeadingProps = { title: string };

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1 className="app__title">{title}</h1>;
};

export default Heading;
