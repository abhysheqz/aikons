import React from "react";
const FingerAccess: React.FC<
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
        d="M18 12a6 6 0 1 0-12 0c0 3.314 1 5.5 3 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 21c-5.5-3.5-6-7.343-6-9a3 3 0 1 1 6 0 3 3 0 1 0 6 0 9 9 0 1 0-17.777 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12c.5 5 5.5 7 5.5 7"
      />
    </svg>
  );
};
export default FingerAccess;
