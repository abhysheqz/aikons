import React from "react";
const Progress: React.FC<
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
        d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 6a.75.75 0 0 1 .75-.75 6.75 6.75 0 1 1-5.846 10.125.75.75 0 0 1 .275-1.024l4.821-2.784z"
      />
    </svg>
  );
};
export default Progress;
