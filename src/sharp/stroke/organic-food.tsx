import React from "react";
const OrganicFood: React.FC<
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
        strokeWidth={1.5}
        d="M10 9.255C7.606 7.958 5.08 5.715 3 2m8.616 2.419C9.58 3.084 7.097 3.642 6.069 5.666s-.211 4.747 1.824 6.083c1.842 1.209 5.874 2.459 9.107-1.004-3.03-1.29-3.35-4.99-5.384-6.326Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 11c-.64.47-1 1.005-1 1.572C3 14.465 7.03 16 12 16s9-1.535 9-3.428c0-.567-.36-1.101-1-1.572"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 13c0 3.795-2.302 7.125-5 9H8c-2.698-1.875-5-5.205-5-9"
      />
    </svg>
  );
};
export default OrganicFood;
