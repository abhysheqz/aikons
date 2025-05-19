import React from "react";
const ThreeSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7 4.25A3.5 3.5 0 0 0 8 9.5a1 1 0 1 0 2 0A1.5 1.5 0 0 1 11.5 8h1a1.5 1.5 0 0 1 0 3h-1a1 1 0 1 0 0 2h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5 1 1 0 1 0-2 0 3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 2.45-6 3.5 3.5 0 0 0-2.45-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThreeSquare;
