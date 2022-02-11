import { DateTime } from "../../components";

import styles from "./styles.module.css";

interface Props {
  title: string;
  withDate?: boolean;
  withDateTime?: boolean;
}

export const Header = ({
  title,
  withDate = false,
  withDateTime = false,
}: Props) => {
  return (
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
      {(withDate || withDateTime) && <DateTime withTime={withDateTime} />}
      <hr />
    </div>
  );
};
