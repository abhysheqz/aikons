import React from "react";
const Incognito: React.FC<
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
        d="M10 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM20 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM2 12h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 16.341A3 3 0 0 0 12 15a3 3 0 0 0-2.5 1.341M4 12l1.477-6.297c.086-.367.13-.55.17-.681.607-1.896 2.587-2.621 4.018-1.47.098.079.224.2.475.444.144.14.217.21.284.267.938.8 2.214.8 3.153 0 .066-.057.139-.127.283-.267.251-.243.377-.365.475-.444 1.431-1.151 3.411-.426 4.017 1.47.042.13.085.314.171.68L20 12z"
      />
    </svg>
  );
};
export default Incognito;
