import React from "react";
const Wordpress: React.FC<
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
        d="M2 6.5h1m0 0 5 14 2-4m-7-10h3.5m0 0h1m-1 0 3.5 10m0 0 2.5-5M10 6.5h1m0 0 5 14 2-3.5M11 6.5h3.5m0 0h1m-1 0L18 17m0 0 2.529-4.856m0 0 1.009-2.41a7.7 7.7 0 0 0 .415-3.47C21.796 4.858 21.158 3.5 19.5 3.5c-1.538 0-2.29 1.723-1.311 2.894 1.58 1.888 2.982 3.981 2.339 5.75"
      />
    </svg>
  );
};
export default Wordpress;
