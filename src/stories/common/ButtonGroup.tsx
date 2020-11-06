import React from "react";

interface IButtonGroupProps {
  children: React.ReactNode;
}

export function ButtonGroup(props: IButtonGroupProps) {
  return <div className="button-group">{props.children}</div>;
}
