import React from "react";
const Saturn_02: React.FC<
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
        strokeWidth={1.5}
        d="M22 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.897 10.653q.102.67.103 1.37c0 4.982-4.026 9.021-8.993 9.021a8.7 8.7 0 0 1-3.777-.845M21.16 6.406c1.915-4.094.218-4.753-1.813-4.24-1.446.365-3.049 1.397-3.511 1.68-1.169-.557-2.449-.844-3.83-.844-4.967 0-8.993 4.039-8.993 9.02a9 9 0 0 0 .853 3.842m4.364 4.335c2.58-1.67 6.595-4.784 10.08-9.352M8.23 20.199c-.786.549-3.018 1.807-4.577 1.82-1.82.017-2.634-1.46.213-6.155m1.782 2.539a9 9 0 0 1-1.782-2.54"
      />
    </svg>
  );
};
export default Saturn_02;
