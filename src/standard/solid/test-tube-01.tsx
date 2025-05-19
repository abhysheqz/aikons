import React from "react";
const TestTube_01: React.FC<
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
        d="M8 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.997 1a1 1 0 0 1 1 1v7a1 1 0 0 1-.11.455l-1.359 2.662q.252.067.484.155c.737.275 1.523.74 2.268 1.19 1 .607 1.642.59 2.002.474.357-.113.621-.379.771-.667l-1.947-3.814a1 1 0 0 1-.11-.455V2a1 1 0 1 1 2 0v6.76l5.773 11.306.001.003C21.426 21.34 20.576 23 19.035 23H4.959c-1.54 0-2.391-1.658-1.736-2.93l.002-.004L8.997 8.76V2a1 1 0 0 1 1-1m.976 15.734a1 1 0 0 1-.698 1.23l-.008.003a1 1 0 0 1-.533-1.928l.008-.003a1 1 0 0 1 1.23.698m4.295 3.232a1 1 0 0 0-.518-1.932l-.009.003a1 1 0 0 0 .518 1.931z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_01;
