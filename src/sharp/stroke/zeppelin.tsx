import React from "react";
const Zeppelin: React.FC<
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
        d="M19 15.997 18 20l-5-1-2-2.463"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.997c0 3 8 6 13 6 4 0 7-2.686 7-6s-3-6-7-6c-5 0-13 3-13 6ZM2 10.997h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 6.5 5 4 3 5l1 2.997M7.5 15.5 5 18l-2-1 1-3.003"
      />
    </svg>
  );
};
export default Zeppelin;
