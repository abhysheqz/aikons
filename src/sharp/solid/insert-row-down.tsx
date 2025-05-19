import React from "react";
const InsertRowDown: React.FC<
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
        d="M13 11.836v6.586l2-2 1.414 1.414L12 22.25l-4.414-4.414L9 16.422l2 2v-6.586z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 2.5v5.25h-6v-6H21a.75.75 0 0 1 .75.75M9.75 1.75h4.5v6h-4.5zM3 1.75h5.25v6h-6V2.5A.75.75 0 0 1 3 1.75M21.75 9.25H2.25V20.5c0 .414.336.75.75.75h6.232l-3.414-3.414L9 14.654l.75.75v-4.818h4.5v4.818l.75-.75 3.182 3.182-3.414 3.414H21a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default InsertRowDown;
