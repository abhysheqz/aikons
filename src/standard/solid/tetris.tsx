import React from "react";
const Tetris: React.FC<
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
        d="M8 2.25A1.75 1.75 0 0 0 6.25 4v2.268A2 2 0 0 0 6 6.25H4A1.75 1.75 0 0 0 2.25 8v6c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 7.75 14v-2.268q.123.018.25.018h2A1.75 1.75 0 0 0 11.75 10V4A1.75 1.75 0 0 0 10 2.25zm2 14A1.75 1.75 0 0 0 8.25 18v2c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 21.75 20v-2A1.75 1.75 0 0 0 20 16.25h-2.25V14A1.75 1.75 0 0 0 16 12.25h-2A1.75 1.75 0 0 0 12.25 14v2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tetris;
