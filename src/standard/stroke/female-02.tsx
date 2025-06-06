import React from "react";
const Female_02: React.FC<
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
        d="m14.5 16.5 4.485 1.121a2 2 0 0 1 1.515 1.94V21.5h-17l.053-1.988a2 2 0 0 1 1.507-1.884L9.5 16.5v-2.155c-1.285-.163-2.47-.448-3.5-.829.5-.984 1-2.46 1-5.903 0-5.904 5.5-5.904 7-3.936 3-.492 3 1.968 3 4.92 0 2.36.667 4.263 1 4.92-1.03.38-2.215.665-3.5.828z"
      />
    </svg>
  );
};
export default Female_02;
