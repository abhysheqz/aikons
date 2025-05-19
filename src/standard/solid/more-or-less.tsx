import React from "react";
const MoreOrLess: React.FC<
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
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M8.207 2.793a1 1 0 0 1 0 1.414L6.414 6H20a1 1 0 1 1 0 2H4a1 1 0 0 1-.707-1.707l3.5-3.5a1 1 0 0 1 1.414 0M4 16h16a1 1 0 0 1 .706 1.707l-3.499 3.5a1 1 0 1 1-1.414-1.414L17.585 18H4a1 1 0 0 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLess;
