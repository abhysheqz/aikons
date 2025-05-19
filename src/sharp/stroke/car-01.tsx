import React from "react";
const Car_01: React.FC<
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
        d="M2 13h3M22 13h-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17v3h4.5v-3M17.5 17v3H22v-3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 10 22 8M4.5 10 2 8M4 10l2-6h12l2 6M2 17v-4l2-3h16l2 3v4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 17-1.497-2.995a.01.01 0 0 0-.01-.005H9.507a.01.01 0 0 0-.009.005L8 17"
      />
    </svg>
  );
};
export default Car_01;
