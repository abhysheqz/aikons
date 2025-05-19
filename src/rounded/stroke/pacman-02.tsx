import React from "react";
const Pacman_02: React.FC<
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
        d="M20 10a8 8 0 1 0-16 0v10.4a1.6 1.6 0 1 0 3.2 0v-.8a1.6 1.6 0 1 1 3.2 0v.8a1.6 1.6 0 1 0 3.2 0v-.8a1.6 1.6 0 1 1 3.2 0v.8a1.6 1.6 0 1 0 3.2 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 10H9m6 0h-.009"
      />
    </svg>
  );
};
export default Pacman_02;
