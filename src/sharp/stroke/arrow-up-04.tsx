import React from "react";
const ArrowUp_04: React.FC<
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
        d="M12 9v11"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m12 4 4 5H8z" />
    </svg>
  );
};
export default ArrowUp_04;
