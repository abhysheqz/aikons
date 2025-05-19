import React from "react";
const SunCloud_01: React.FC<
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
        d="M3.148 7.858c0-1.5 1.21-2.71 2.698-2.71.737 0 1.405.296 1.894.779a6.24 6.24 0 0 0-1.887 3.437c-.597.121-1.16.335-1.675.625a2.71 2.71 0 0 1-1.03-2.131m-.465 3.343A4.6 4.6 0 0 1 1.25 7.858 4.6 4.6 0 0 1 5.846 3.25c1.393 0 2.64.621 3.48 1.599a6.25 6.25 0 0 1 8.92 5.454A5.251 5.251 0 0 1 17.5 20.75H7A5.75 5.75 0 0 1 2.683 11.2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloud_01;
