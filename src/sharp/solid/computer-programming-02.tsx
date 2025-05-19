import React from "react";
const ComputerProgramming_02: React.FC<
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
        d="M1.25 3.22c0-.535.438-.97.977-.97H12v1.941H3.205V16.81h17.59V10.5h1.955v7.28c0 .535-.437.97-.977.97H2.227a.974.974 0 0 1-.977-.97z"
      />
      <path
        fill="currentColor"
        d="M14.5 20.75H17v2H7v-2h2.5V18h5zM19.5 1.25a.75.75 0 0 1 .53.22l2.5 2.5a.75.75 0 0 1 0 1.06l-5.72 5.72h-3.56V7.19l5.72-5.72a.75.75 0 0 1 .53-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 10.75H7v-2h7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerProgramming_02;
