import React from "react";
const Diamond_01: React.FC<
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
        d="m6.959 7.034 1.085-1.306C10.11 3.243 11.142 2 12.5 2s2.39 1.243 4.456 3.728l1.085 1.306C20.014 9.41 21 10.596 21 12s-.986 2.591-2.959 4.966l-1.085 1.306C14.89 20.757 13.858 22 12.5 22s-2.39-1.243-4.456-3.728L6.96 16.966C4.986 14.59 4 13.404 4 12s.986-2.591 2.959-4.966Z"
      />
    </svg>
  );
};
export default Diamond_01;
