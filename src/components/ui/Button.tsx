import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => (
  <button type={type} className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
