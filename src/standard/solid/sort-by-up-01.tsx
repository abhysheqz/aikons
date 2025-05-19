import React from "react";
const SortByUp_01: React.FC<
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
        d="M2.25 4c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 9 10.75H4A1.75 1.75 0 0 1 2.25 9zM2.25 15c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 9 21.75H4A1.75 1.75 0 0 1 2.25 20zM14.232 17.14a1 1 0 0 0 1.408.128l2.28-1.9A3 3 0 0 0 19 13.063V8.5h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 15.5 8.5H17v4.563a1 1 0 0 1-.36.768l-2.28 1.9a1 1 0 0 0-.128 1.41"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortByUp_01;
