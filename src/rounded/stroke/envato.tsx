import React from "react";
const Envato: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.62 9.719c-.043 1.33.121 2.803.68 4.046.28.625.421.938.671.895s.276-.435.328-1.218c.338-5.138 4.763-10.621 9.936-11.375.521-.077.782-.115 1.09.038.307.153.44.401.706.898C23.478 11.316 20.138 22 11.58 22 4.848 22 .83 14.192 4.236 9.084c.543-.815.815-1.222 1.127-1.126s.294.65.258 1.76Z"
      />
    </svg>
  );
};
export default Envato;
