import React from "react";
const BabyBed_01: React.FC<
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
        d="M12 7v8M8 7v8m8-8v8M20 20V6a2 2 0 0 1 2-2M4 20V6a2 2 0 0 0-2-2M4 7h16M4 15h16M4 18h16"
      />
    </svg>
  );
};
export default BabyBed_01;
