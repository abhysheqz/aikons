import React from "react";
const SquareLockMinus_02: React.FC<
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
        d="M17 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-1.332 4a.75.75 0 0 0 0 1.5h2.667a.75.75 0 0 0 0-1.5zM11 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5a1 1 0 0 1-2 0v-2.5a5.5 5.5 0 1 1 11 0v2.5a1 1 0 1 1-2 0v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.525 8.35A96 96 0 0 1 11 8.25c1.596 0 3.046.034 4.475.1 2.058.095 3.729 1.688 4 3.705a.127.127 0 0 1-.173.133 6.25 6.25 0 0 0-7.432 9.383c.397.569.595.853.511 1.014s-.4.162-1.031.164a101 101 0 0 1-4.825-.099c-2.058-.095-3.729-1.688-4-3.705-.149-1.1-.275-2.257-.275-3.445s.126-2.344.275-3.445c.271-2.017 1.942-3.61 4-3.705"
      />
    </svg>
  );
};
export default SquareLockMinus_02;
