import React from "react";
const Chimney: React.FC<
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
        d="M5.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75c0 2.65.406 6.246.982 8.837l.003.016.88 4.397H17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.885l.88-4.397.003-.016c.576-2.593.982-5.896.982-8.837"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 22a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M9.25 5A3.75 3.75 0 0 1 13 1.25h4a.75.75 0 0 1 0 1.5h-4A2.25 2.25 0 0 0 10.75 5a.75.75 0 0 1-1.5 0m10-3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chimney;
