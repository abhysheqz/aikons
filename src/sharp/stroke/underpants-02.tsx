import React from "react";
const Underpants_02: React.FC<
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
        d="M16 16 13.89 8M8 16l2.108-8M3.5 8h17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 5H4l-1.998 9.99a.01.01 0 0 0 .008.012L8 16l1.997 2.996a.01.01 0 0 0 .008.004h3.99a.01.01 0 0 0 .008-.005L16 16l5.99-.998a.01.01 0 0 0 .008-.012z"
      />
    </svg>
  );
};
export default Underpants_02;
