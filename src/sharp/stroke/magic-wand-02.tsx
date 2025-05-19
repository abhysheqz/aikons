import React from "react";
const MagicWand_02: React.FC<
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
        d="m16.594 16.594 4.027 4.027"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.346 4.365 6.9 10.711l-4.332 4.284a.01.01 0 0 0 .007.017l6.604.351 2.973 6.157a.01.01 0 0 0 .018-.002l2.225-7.118 7.166-2.202a.01.01 0 0 0 .002-.018l-6.228-3.114-.28-6.532a.01.01 0 0 0-.018-.007l-4.425 4.4L4.36 4.353a.01.01 0 0 0-.014.013Z"
      />
    </svg>
  );
};
export default MagicWand_02;
