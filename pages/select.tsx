/* eslint-disable react/jsx-key */
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import styles from "../styles/Select.module.css";

const Select = (props:any) => {
  const [value, setValue] = useState("Set Value");
  const [open, setOpen] = useState(false);
  const onElementClick = (string:any) => {
    setValue(string);
  };

  const onButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div
          className={styles.button}
          onClick={() => {
            onButton();
          }}
        >
          {value}{" "}
        </div>
        {open && (
          <div className={styles.content}>
            {props.selectable.map((string: any) => {
              return (
                <div
                  onClick={() => {
                    onElementClick(string);
                    setOpen(false)
                  }}
                >
                  {string}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
