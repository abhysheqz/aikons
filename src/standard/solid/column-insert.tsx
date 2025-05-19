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
        fillRule="evenodd"
        d="M7.982 1.36a1 1 0 0 1 1.408-.128l2.36 1.966 2.36-1.966a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 0 1-.128-1.408"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 7.751a1.75 1.75 0 0 1 1.752-1.75l5 .007a1.75 1.75 0 0 1 1.748 1.75V20.75a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 13 20.75zM2 7.751a1.75 1.75 0 0 1 1.752-1.75l5 .007a1.75 1.75 0 0 1 1.748 1.75V20.75a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 2 20.75z"
      />
    </svg>
  );
};
export default ColumnInsert;
