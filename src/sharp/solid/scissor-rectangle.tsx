import React from "react";
const ScissorRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM13.75 8a1.25 1.25 0 1 1 2.499 0 1.25 1.25 0 0 1-2.5 0M15 5.25a2.75 2.75 0 0 0-2.402 4.09l-1.599 1.6-3.47-3.47-1.06 1.06L9.939 12l-3.47 3.47 1.06 1.06L11 13.06l1.599 1.6a2.75 2.75 0 1 0 1.06-1.06l-1.598-1.6 1.598-1.598a2.75 2.75 0 1 0 1.34-5.151M13.75 16a1.25 1.25 0 1 1 2.499 0 1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScissorRectangle;
