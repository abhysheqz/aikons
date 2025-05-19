import React from "react";
const Transparency: React.FC<
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
        d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.026 15.607a7 7 0 0 1 7.821-7.556m3.15 1.202a7 7 0 1 1-9.744 9.744M6.5 2.5l9 9m-13-5 9 9"
      />
    </svg>
  );
};
export default Transparency;
