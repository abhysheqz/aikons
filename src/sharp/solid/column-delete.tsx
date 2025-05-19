import React from "react";
const ColumnDelete: React.FC<
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
        d="M1.47 3.47a.75.75 0 0 1 .531-.22l7 .012a.75.75 0 0 1 .749.75V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V4c0-.2.08-.39.22-.53"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.458 4.957 22.75 7.25l-1.414 1.415-2.293-2.293-2.293 2.293-1.414-1.414 2.293-2.293-2.293-2.293L16.75 1.25l2.293 2.293 2.293-2.292 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.154 3.252-1.153-.002a.75.75 0 0 0-.751.75v18a.75.75 0 0 0 .75.75h7a.75.75 0 0 0 .75-.75V9.847L19.04 8.14l-2.293 2.293-3.182-3.182 2.293-2.293z"
      />
    </svg>
  );
};
export default ColumnDelete;
