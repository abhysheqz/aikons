import React from "react";
const Estimate_02: React.FC<
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
        d="M17.75 11.755a5.75 5.75 0 0 0-5.229 7.495H1.25V1.75h16.5zM4.25 5.75h10.5v1.5H4.25zm2.5 4h-2.5v1.5h2.5zm1.5 0h2.5v1.5h-2.5zm6.5 0h-2.5v1.5h2.5zm-10.5 4h2.5v1.5h-2.5zm6.5 0h-2.5v1.5h2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 4.287V15.25h-1.5v2.714l2.085 1.042.671-1.341z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Estimate_02;
