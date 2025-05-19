import React from "react";
const BabyBed_02: React.FC<
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
        d="M12 7v8m4-8v8M8 7v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 17c-2.665 1.867-6.166 3-10 3s-7.335-1.133-10-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 18V6a2 2 0 0 1 2-2M4 18V6a2 2 0 0 0-2-2M4 7h16M4 15h16"
      />
    </svg>
  );
};
export default BabyBed_02;
