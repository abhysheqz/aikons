import React from "react";
const InsertColumn: React.FC<
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
        d="M18.25 7v4h4v2h-4v4h-2v-4h-4v-2h4V7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 2.25h5.25v6h-6V3a.75.75 0 0 1 .75-.75M1.75 14.25v-4.5h6v4.5zM1.75 15.75V21c0 .414.336.75.75.75h5.25v-6zM9.25 2.25v19.5H20.5a.75.75 0 0 0 .75-.75v-6.75H19.5v4H15v-4h-4v-4.5h4v-4h4.5v4h1.75V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default InsertColumn;
