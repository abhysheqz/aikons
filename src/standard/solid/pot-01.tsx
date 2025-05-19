import React from "react";
const Pot_01: React.FC<
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
        d="M2 8.5a1 1 0 0 0 0 2h1.338l.667 7.34a3.75 3.75 0 0 0 3.735 3.41h8.52a3.75 3.75 0 0 0 3.735-3.41l.667-7.34H22a1 1 0 1 0 0-2zM8.823 3.868A2 2 0 0 1 10.721 2.5h2.558a2 2 0 0 1 1.898 1.368L15.72 5.5H20a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2h4.28z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pot_01;
