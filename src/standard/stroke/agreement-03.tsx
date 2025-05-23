import React from "react";
const Agreement_03: React.FC<
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
        d="M6 22h-.999A2 2 0 0 1 3 20V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.002h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22s1.69-.607 3.05-1.822m0 0c1.158-1.036 2.336-2.514 2.95-4.433 1.333-4.17-6.667 0-4 3.475.328.428.681.74 1.05.958m0 0c1.602.948 3.177.302 4.45-.678.39-.3.884-.547 1-.5s.364.464.5 1c.434 1.715 1.5 2.5 3 .61"
      />
    </svg>
  );
};
export default Agreement_03;
