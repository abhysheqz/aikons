import React from "react";
const ColumnInsert: React.FC<
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
        d="M13.47 6.47a.75.75 0 0 1 .531-.22l7 .01a.75.75 0 0 1 .749.75V22a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V7c0-.2.08-.39.22-.53M2.47 6.47a.75.75 0 0 1 .531-.22l7 .01a.75.75 0 0 1 .749.75V22a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V7c0-.2.08-.39.22-.53"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.217 9.64 1.25 8.36 2.786 12 5.82l3.64-3.034-1.28-1.536z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ColumnInsert;
