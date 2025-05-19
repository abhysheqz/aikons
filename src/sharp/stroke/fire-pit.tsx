import React from "react";
const FirePit: React.FC<
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
        d="M9.104 17.5c-.77-.928-.68-2.301-.406-3.184 4.477 2.184 5.061-1.816 4.725-2.816 1.505 1 2.965 4.419 1.414 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.816 17.5C5.592 16.429 5.001 12 6.001 9c1 2.071 2.749 2.071 2.749 2.071C7.667 6.786 10 3.5 14 2c-1 2-1.5 4.5 0 6 .5-1 1.5-2.5 3.5-2.5 0 0-1.38 2.516.027 4.522 1.625 2.315 1.209 5.763-1.207 7.478"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.5 17.5h17m-17 0 1 4h15l1-4m-17 0H2m18.5 0H22"
      />
    </svg>
  );
};
export default FirePit;
