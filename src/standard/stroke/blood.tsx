import React from "react";
const Blood: React.FC<
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
        d="M15.505 5.331C17.11 6.431 22 10.158 22 14.775 22 18.765 18.866 22 15 22s-7-3.235-7-7.225c0-4.617 4.889-8.344 6.495-9.444a.885.885 0 0 1 1.01 0M5 14.5c-1.88-.836-3-2.78-3-5.025 0-3.438 3.643-6.23 4.999-7.152a.87.87 0 0 1 .998.007A16.4 16.4 0 0 1 10.5 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 15.5c0 2.21-1.5 3-3 3"
      />
    </svg>
  );
};
export default Blood;
