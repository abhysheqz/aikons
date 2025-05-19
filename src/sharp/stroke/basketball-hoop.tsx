import React from "react";
const BasketballHoop: React.FC<
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
        d="M19 17h3V2H2v15h3M5 13h2.333m0 0L8.5 22m-1.167-9H12m7 0h-2.333m0 0L15.5 22m1.167-9H12m0 0v9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 11V8h8v3M8 16.5h8M8.444 20h7.112"
      />
    </svg>
  );
};
export default BasketballHoop;
