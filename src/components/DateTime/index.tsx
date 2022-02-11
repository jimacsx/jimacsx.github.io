import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  withTime?: boolean;
}

export const DateTime = ({ withTime = false }: Props) => {
  const [dateState, setDateState] = useState(new Date());

  let timeoutId: any = useRef(null);

  useEffect(() => {
    if (withTime) {
      if (timeoutId.current) clearInterval(timeoutId.current);
      timeoutId.current = setInterval(() => {
        setDateState(new Date());
      }, 30000);
    }
  }, [withTime]);

  useEffect(() => {
    return () => {
      if (timeoutId.current) clearInterval(timeoutId.current);
    };
  }, [timeoutId]);

  return (
    <div className={styles.datetimeContainer}>
      <p>
        {dateState.toLocaleDateString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        &nbsp;
      </p>
      {withTime && (
        <p>
          {dateState.toLocaleString("es-MX", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      )}
    </div>
  );
};
