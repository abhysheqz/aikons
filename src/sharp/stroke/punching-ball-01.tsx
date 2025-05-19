import React from "react";
const PunchingBall_01: React.FC<
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
        d="M12 22c-3.866 0-7-2.319-7-5.834C5 13.14 7.595 11 9.061 7.077c.186-.498.28-.747.35-.877.383-.694.923-1.046 1.77-1.152a7 7 0 0 1 1.639 0c.846.106 1.386.458 1.768 1.152.072.13.165.38.351.877C16.405 11 19 13.14 19 16.167 19 19.68 15.866 22 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.516 14c0 2.25-.366 8 2.484 8 2.847 0 2.487-5.75 2.486-8M12 5V2M9 2h6M16 9H8"
      />
    </svg>
  );
};
export default PunchingBall_01;
