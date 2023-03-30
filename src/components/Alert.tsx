import React from "react";
interface Props {
  children: any;
}

export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
export default Alert;
