import React from "react";
const DatabaseSync: React.FC<
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
        d="M21 12.5V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h5.5M12.5 6.5h4"
      />
      <circle
        cx={7.75}
        cy={6.75}
        r={1.25}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7.75}
        cy={16.25}
        r={1.25}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 11.5h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.663 17a3.5 3.5 0 0 0-3.163-2c-1.763 0-3.257 1.304-3.5 3l-1-2m1.337 4a3.5 3.5 0 0 0 3.163 2c1.763 0 3.257-1.304 3.5-3l1 2"
      />
    </svg>
  );
};
export default DatabaseSync;
