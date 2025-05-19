import React from "react";
const Alpha: React.FC<
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
        strokeWidth={1.5}
        d="M17.394 4c.2 1.85-.05 6-1.223 9.275C14.772 17.5 12.674 19.35 11 19.8c-3.246.873-5.969-1.35-7.117-3.825-1.474-3.175-1.074-6.85.974-9.5s5.918-3.8 8.79-.225c1.1 1.675 1.574 3.475 1.798 4.925.45 1.6.675 5.6 1.848 7.55.924 1.45 2.348 1.375 2.872 1.15.35-.175.834-.555.834-1.655"
      />
    </svg>
  );
};
export default Alpha;
