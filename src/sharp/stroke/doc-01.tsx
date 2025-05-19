import React from "react";
const Doc_01: React.FC<
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
        d="M20.48 17.498V16l-4.01-.003-.001 6 4.01-.003v-1.498M14 17.99v2.014a1.992 1.992 0 0 1-3.984 0v-2.014a1.992 1.992 0 0 1 3.984 0ZM3.48 16.007l.02 5.987h1.993a2 2 0 0 0 2-2.003l-.003-1.986a2 2 0 0 0-2-1.998z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Doc_01;
