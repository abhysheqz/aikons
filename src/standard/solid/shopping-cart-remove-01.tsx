import React from "react";
const ShoppingCartRemove_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.125 2.749a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .987.84L7.001 5h1.838c.054.503.274.991.66 1.376l.873.874-.873.874a2.3 2.3 0 0 0 3.252 3.252l.874-.873.874.873a2.3 2.3 0 0 0 3.252-3.252l-.873-.874.873-.874A2.3 2.3 0 0 0 18.411 5h2.714a.75.75 0 0 1 .737.888l-1.5 8a.75.75 0 0 1-.608.6l-10.917 1.9.004.021a1 1 0 0 0 .987.841h8.297q.055 0 .109.006l.141-.004a2.5 2.5 0 1 1-2.45 1.998h-4.1q.05.244.05.502a2.5 2.5 0 1 1-4.393-1.633 3 3 0 0 1-.615-1.391L4.773 3.749H3.125a1 1 0 0 1-1-1m7.25 16.002a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-6.957-15.71a1 1 0 0 1 1.414 0l1.793 1.794 1.793-1.793a1 1 0 1 1 1.414 1.414L15.04 7.25l1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 1 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartRemove_01;
