import React from "react";
const TextCheck: React.FC<
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
        d="M20.694 11.28a1 1 0 0 1 .026 1.414l-6.75 7a1 1 0 0 1-1.463-.025l-2.25-2.5a1 1 0 0 1 1.486-1.338l1.532 1.702 6.005-6.227a1 1 0 0 1 1.414-.026M3 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 10a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextCheck;
