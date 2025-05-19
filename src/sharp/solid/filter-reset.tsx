import React from "react";
const FilterReset: React.FC<
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
        d="M13.25 7h1.5v1.077l.14-.108a4.24 4.24 0 0 1 2.575-.868c2.374 0 4.285 1.944 4.285 4.325 0 2.38-1.91 4.324-4.285 4.324-2.08 0-3.805-1.492-4.2-3.462l1.47-.295c.26 1.293 1.39 2.257 2.73 2.257 1.53 0 2.785-1.257 2.785-2.824 0-1.568-1.255-2.825-2.785-2.825-.625 0-1.2.208-1.666.56l-.87.673H13.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 2.25a.75.75 0 0 0-.75.75v4.351l6.038 5.032.967 8.7a.75.75 0 0 0 1.08.588l4.352-2.176.394-2.76a5.83 5.83 0 0 1-2.911-2.96c-.334-.763-.379-1.61-.384-2.443L11.75 5.5l5.715.101c1.662 0 3.15.702 4.2 1.82l.085-.07V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default FilterReset;
