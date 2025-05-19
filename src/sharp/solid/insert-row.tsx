import React from "react";
const InsertRow: React.FC<
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
        d="M13 12.25v4h4v2h-4v4h-2v-4H7v-2h4v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 2.5v5.25h-6v-6H21a.75.75 0 0 1 .75.75M9.75 1.75h4.5v6h-4.5zM3 1.75h5.25v6h-6V2.5A.75.75 0 0 1 3 1.75M21.75 9.25H2.25V20.5c0 .414.336.75.75.75h6.75V19.5h-4V15h4v-4h4.5v4h4v4.5h-4v1.75H21a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default InsertRow;
