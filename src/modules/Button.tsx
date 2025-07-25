import React from 'react';

interface Props {
    className?: string;
    label?: string;
    onClick?: () => void;
}

const Button = (props: Props) => {
  return (
      <button type="submit" className={props.className} onClick={props.onClick}>{props.label}</button>
  );
};

export default Button;