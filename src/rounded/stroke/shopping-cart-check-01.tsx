import React from "react";
const ShoppingCartCheck_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 7s1 0 2 2c0 0 3.177-5 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 16 5.379 3.515A2 2 0 0 0 3.439 2H2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.88 16h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"
      />
      <circle
        cx={10.5}
        cy={20.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={17.5}
        cy={20.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ShoppingCartCheck_01;
