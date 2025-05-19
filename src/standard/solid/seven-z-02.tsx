import React from "react";
const SevenZ_02: React.FC<
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
        d="M10.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .696 1.028l-2 5a.75.75 0 0 1-1.392-.556l1.588-3.972H11a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .643 1.136l-2.318 3.864H20a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.643-1.136l2.318-3.864H17a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75h-8.458a2 2 0 0 1-1.902-2.743L11.046 16H11a2 2 0 1 1 0-4h9.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenZ_02;
