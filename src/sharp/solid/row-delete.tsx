import React from "react";
const RowDelete: React.FC<
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
        d="M20.531 22.53a.75.75 0 0 0 .22-.531l-.013-7a.75.75 0 0 0-.75-.749H2a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 .75.75h18c.2 0 .39-.08.531-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.043 3.542 16.751 1.25l-1.414 1.414 2.292 2.293-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293L22.75 7.25l-2.293-2.293 2.293-2.293-1.415-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.748 9.846.002 1.153a.75.75 0 0 1-.75.751H2a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 2 3.25h12.153l1.708 1.708-2.293 2.294 3.182 3.182 2.293-2.293z"
      />
    </svg>
  );
};
export default RowDelete;
