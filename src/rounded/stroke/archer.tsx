import React from "react";
const Archer: React.FC<
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
        d="M11 17.03 20 21c-.556-.556-1.51-2.357-.884-5.116.782-3.449 2.25-6.917-3.18-8.82-1.903-5.43-5.371-3.962-8.82-3.18C4.356 4.51 2.556 3.556 2 3l4 9.074M5 18H2l3-3h3v3l-3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15 20 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 3h2c.471 0 .707 0 .854.146C20 3.293 20 3.53 20 4v2"
      />
    </svg>
  );
};
export default Archer;
