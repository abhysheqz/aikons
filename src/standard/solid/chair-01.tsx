import React from "react";
const Chair_01: React.FC<
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
        d="m16.927 3.726.637 6.375-.16-.07a14.05 14.05 0 0 0-10.967.07l.637-6.375A2.75 2.75 0 0 1 9.81 1.25h4.38a2.75 2.75 0 0 1 2.737 2.476m-9.83 7.505a12.75 12.75 0 0 1 9.807 0A3 3 0 0 1 18.75 14v1a.75.75 0 0 1-.75.75h-.745l1.707 5.976a1 1 0 0 1-1.923.549l-1.865-6.525H8.827l-1.864 6.525a1 1 0 0 1-1.923-.55l1.707-5.975H6a.75.75 0 0 1-.75-.75v-1a3 3 0 0 1 1.846-2.77"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chair_01;
