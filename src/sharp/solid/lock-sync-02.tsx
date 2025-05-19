import React from "react";
const LockSync_02: React.FC<
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
        d="M12.001 6.25c-1.637 0-3 1.298-3 2.94v1.458a4.1 4.1 0 0 0-1.25 2.945c0 2.315 1.922 4.157 4.25 4.157s4.25-1.842 4.25-4.157c0-1.157-.48-2.195-1.25-2.945V9.19c0-1.643-1.362-2.94-3-2.94m0 3.185c-.526 0-1.032.095-1.5.267v-.511c0-.777.653-1.44 1.5-1.44.848 0 1.5.663 1.5 1.44v.511a4.3 4.3 0 0 0-1.5-.267"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.025 3.205c-4.873 0-8.82 3.94-8.82 8.795s3.947 8.796 8.82 8.796a8.82 8.82 0 0 0 8.086-5.279l1.79.784a10.78 10.78 0 0 1-9.876 6.45C6.077 22.75 1.25 17.938 1.25 12c0-5.94 4.826-10.75 10.774-10.75 5.585 0 10.18 4.24 10.72 9.675a.977.977 0 0 1-1.28 1.024l-2.932-.977.618-1.855 1.353.451a8.82 8.82 0 0 0-8.48-6.364"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockSync_02;
