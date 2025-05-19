import React from "react";
const Flag_03: React.FC<
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
        d="M4 21V8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.98 2.999H4.009a.01.01 0 0 0-.01.01v11.979q.001.009.01.01h15.967a.01.01 0 0 0 .008-.016l-3.998-5.984 4.004-5.983a.01.01 0 0 0-.008-.016Z"
      />
    </svg>
  );
};
export default Flag_03;
