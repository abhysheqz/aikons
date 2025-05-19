import React from "react";
const Wireless: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm5.148 8.576C8.706 10.587 10.287 10 11.996 10c1.715 0 3.3.59 4.61 1.585l-1.209 1.593c-.992-.753-2.159-1.178-3.4-1.178-1.239 0-2.402.423-3.392 1.171zm1.929 2.27a5.3 5.3 0 0 1 2.67-.722c.969 0 1.88.265 2.68.729l-1.003 1.73a3.3 3.3 0 0 0-1.678-.46c-.594 0-1.16.161-1.67.456zM12 16.5a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2zM6 5h2.006v2H6zm6.006 0H10v2h2.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wireless;
