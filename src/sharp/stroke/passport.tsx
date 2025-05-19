import React from "react";
const Passport: React.FC<
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
        d="M22 3H2v18h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 16.5c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10h4M15 14h4"
      />
    </svg>
  );
};
export default Passport;
