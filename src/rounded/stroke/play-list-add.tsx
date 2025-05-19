import React from "react";
const PlayListAdd: React.FC<
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
        d="M2 7h19M16.5 2l-3 5M9.5 2l-3 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 21c-4.478 0-6.717 0-8.109-1.391-1.39-1.392-1.39-3.63-1.39-8.109 0-4.478 0-6.718 1.39-8.109C4.783 2 7.021 2 11.501 2c4.477 0 6.717 0 8.108 1.391S21 7.021 21 11.5M14 18h8m-4 4v-8"
      />
    </svg>
  );
};
export default PlayListAdd;
