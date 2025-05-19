import React from "react";
const DollarCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.5V8m0 0c-1.519 0-2.75.929-2.75 2.074 0 1.146.75 1.778 2.75 1.778s3 .592 3 2.074S13.657 16 12 16m0-8c1.519 0 2.75.929 2.75 2.074M12 16v1.5m0-1.5c-1.657 0-3-.928-3-2.074"
      />
    </svg>
  );
};
export default DollarCircle;
