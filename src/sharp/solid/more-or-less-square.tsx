import React from "react";
const MoreOrLessSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.294 3.043-2.001 2A1 1 0 0 0 7 9h10V7H9.416l.293-.293zM7.001 13h10v-2H7zm10 2H7v2h7.585l-.293.293 1.414 1.415 2-2A1 1 0 0 0 17.002 15"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLessSquare;
