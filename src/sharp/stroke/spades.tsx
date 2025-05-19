import React from "react";
const Spades: React.FC<
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
        d="M4.238 15.771c1.377 1.039 4.109 1.044 5.345.729L8.106 22h7.788l-1.477-5.5c1.236.315 3.968.31 5.345-.729C24.982 11.837 12 2 12 2S-.983 11.837 4.238 15.771Z"
      />
    </svg>
  );
};
export default Spades;
