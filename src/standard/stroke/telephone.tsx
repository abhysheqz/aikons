import React from "react";
const Telephone: React.FC<
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
        strokeWidth={1.5}
        d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 2.595C5.802 2.9 4.64 3.44 3.74 3.93 2.611 4.543 2 5.76 2 7.044V9l3.735-1.475A2 2 0 0 0 7 5.665zm0 0c3.121-.793 6.879-.793 10 0m0 0c1.198.305 2.36.844 3.26 1.334C21.389 4.543 22 5.76 22 7.044V9l-3.735-1.475A2 2 0 0 1 17 5.665zM3 20v-4.712a2 2 0 0 1 1.172-1.82L8.5 11.5l.34-1.696A1 1 0 0 1 9.82 9h4.36a1 1 0 0 1 .98.804l.34 1.696 4.328 1.967A2 2 0 0 1 21 15.287V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default Telephone;
