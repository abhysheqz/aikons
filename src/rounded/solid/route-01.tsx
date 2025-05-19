import React from "react";
const Route_01: React.FC<
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
        d="M14.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8.5A4.5 4.5 0 0 1 8.5 4H12a1 1 0 1 1 0 2H8.5a2.5 2.5 0 0 0 0 5h7a4.5 4.5 0 1 1 0 9H12a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 0-5h-7A4.5 4.5 0 0 1 4 8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_01;
