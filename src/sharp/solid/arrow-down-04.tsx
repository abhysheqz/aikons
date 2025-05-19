import React from "react";
const ArrowDown_04: React.FC<
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
        d="M17.5 13.398 12.002 20.5 6.5 13.398H11V3.5h2v9.898z"
      />
    </svg>
  );
};
export default ArrowDown_04;
