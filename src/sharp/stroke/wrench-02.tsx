import React from "react";
const Wrench_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.009 19H12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.008 21.95a.01.01 0 0 1-.01.01L9 21.966a.01.01 0 0 1-.01-.01V12.8C6.045 11.01 5.39 7.82 6.507 5.278c.674-1.532 2.106-2.831 3.5-3.313.003.646-.004 1.633 0 2.457.003.87-.06 2.049 0 2.556.572 2.356 3.58 2.033 3.98 0 .065-.335-.016-1.266 0-1.968.022-1.01-.005-2.032 0-3.034a6.04 6.04 0 0 1 3.532 3.35c.566 1.375.646 2.724.133 4.358-.469 1.12-1.1 2.189-2.644 3.122z"
      />
    </svg>
  );
};
export default Wrench_02;
