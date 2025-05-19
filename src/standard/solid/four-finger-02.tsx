import React from "react";
const FourFinger_02: React.FC<
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
        d="M13.58 11.71a.45.45 0 1 0 .9 0V5.26a1.26 1.26 0 1 1 2.521 0v7.46a.45.45 0 1 0 .9 0V7.05a1.05 1.05 0 1 1 2.1 0v9.547a4 4 0 0 1-.876 2.499L18 20.5v.5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-.5l-3.387-4.656a3.21 3.21 0 0 1 .482-4.303l2.009-1.757v3.902a.45.45 0 0 0 .9 0L8 5.052a1.051 1.051 0 1 1 2.104 0l.004 5.746a.45.45 0 1 0 .9 0L11 3.287a1.285 1.285 0 1 1 2.57-.003z"
      />
    </svg>
  );
};
export default FourFinger_02;
