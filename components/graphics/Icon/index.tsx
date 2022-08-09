import React from 'react';

type Props = {
    className?: string
}

const Icon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFFFFF"
  >
    <path
      d="M11.8377 0.00297546L25.614 8.28394V24.0019L15.2406 30.003V14.285L1.44775 6.01503L11.8377 0.00297546Z"
      fill="#FFFFFF"
    />
    <path
      d="M10.7817 29.1316V16.8663L0.38623 22.8784L10.7817 29.1316Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default Icon;
