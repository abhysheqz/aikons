import React from "react";
const Dress_06: React.FC<
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
        d="M18.774 9.028c-2.21 2.21-1.607 4.32-1.085 5.907.523 1.588 1.286 3.516 1.286 5.064-3.575 2.23-8.885 3.068-14 .02.121-2.432 1.41-4.881 1.63-6.27l.004-.03c.219-1.38.448-2.83-1.43-4.71"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.623 12.935C3.528 12.86 2.09 9.841 2 8.887c.666-2.889 4.024-5.79 6.487-6.865l3.498 2.472 3.52-2.495C20.571 4.62 21.683 7.827 22 8.916c-.368.958-1.083 3.702-4.619 4.075"
      />
    </svg>
  );
};
export default Dress_06;
