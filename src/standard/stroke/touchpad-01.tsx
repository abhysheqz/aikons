import React from "react";
const Touchpad_01: React.FC<
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
        d="M20.499 9V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v12A1.5 1.5 0 0 0 4 17.5h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21.5v-2l-3.66-4.257a1.42 1.42 0 0 1 .133-1.978 1.41 1.41 0 0 1 1.91.025l1.627 1.524V7a1.5 1.5 0 0 1 3.001 0v4.441c.595 0 3.953.179 5.513 2.16.458.582.539 1.368.436 2.102C21.213 17.484 20 19.5 20 19.5v2"
      />
    </svg>
  );
};
export default Touchpad_01;
