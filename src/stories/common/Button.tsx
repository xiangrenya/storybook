import React, { useState } from "react";

interface IButtonProps {
  active?: boolean;
  onClick?: Function;
  children?: React.ReactNode;
}

export function Button(props: IButtonProps) {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
    props.onClick && props.onClick();
  };
  const className = `button ${active ? "active" : ""}`;
  return (
    <button onClick={onClick} className={className}>
      {props.children}
    </button>
  );
}
