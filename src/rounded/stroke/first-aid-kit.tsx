import React from "react";
const FirstAidKit: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12.563c0-3.094 0-4.64 1.025-5.602C4.05 6 5.7 6 9 6h6c3.3 0 4.95 0 5.975.961S22 9.47 22 12.563v1.874c0 3.094 0 4.64-1.025 5.602C19.95 21 18.3 21 15 21H9c-3.3 0-4.95 0-5.975-.961S2 17.53 2 14.437zM9 13.5h6m-3-3v6M17 6c0-2.482-.518-3-3-3h-4c-2.482 0-3 .518-3 3"
      />
    </svg>
  );
};
export default FirstAidKit;
