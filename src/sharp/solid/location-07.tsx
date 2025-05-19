import React from "react";
const Location_07: React.FC<
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
        d="M3.25 10.08c0-4.87 3.91-8.83 8.75-8.83s8.75 3.96 8.75 8.83c0 2.795-1.114 4.976-3.253 6.87-1.377 1.221-3.84 3.885-4.87 5.46a.75.75 0 0 1-1.267-.02c-.967-1.586-3.466-4.207-4.857-5.44-2.139-1.894-3.253-4.075-3.253-6.87"
      />
    </svg>
  );
};
export default Location_07;
