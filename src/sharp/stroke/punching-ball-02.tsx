import React from "react";
const PunchingBall_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 22 1.5-3.5h7L17 22zM12 12v6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2C9.515 2 7.5 3.178 7.5 5.846c0 2.335 2.01 2.903 3.015 5.103L11 12h2l.485-1.05C14.49 8.753 16.5 8.201 16.5 5.845 16.5 3.154 14.485 2 12 2Z"
      />
    </svg>
  );
};
export default PunchingBall_02;
