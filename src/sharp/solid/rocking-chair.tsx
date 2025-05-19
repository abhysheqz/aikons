import React from "react";
const RockingChair: React.FC<
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
        d="M5.492 18.038a8.3 8.3 0 0 1-.831-.988L3 18.238c1.956 2.735 5.268 4.512 9 4.512s7.044-1.777 9-4.512l-1.661-1.188a8.3 8.3 0 0 1-.82.977l-1.132-3.395H18v-2h-2v-4h1v1h2v-2a1 1 0 0 0-1-1H6.71L4.898 1.25 3 1.882l3.96 11.75zm1.666 1.323 1.577-4.73h6.544l1.574 4.724A9.24 9.24 0 0 1 12 20.708a9.25 9.25 0 0 1-4.842-1.346M10 8.631H7.385l1.348 4H10zm4 0h-2v4h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RockingChair;
