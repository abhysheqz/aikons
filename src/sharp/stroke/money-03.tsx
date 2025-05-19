import React from "react";
const Money_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 5c4 0 6 1 6 1v13s-2-1-6-1c-5 0-6 2-14 0V5c8 2 9 0 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 9.001c1.951 0 3.705-1.594 3.929-3.245M18.5 5.5c0 2.04 1.765 3.97 3.5 3.97M22 15c-1.9 0-3.74 1.31-3.898 3.099M6 18.498a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default Money_03;
