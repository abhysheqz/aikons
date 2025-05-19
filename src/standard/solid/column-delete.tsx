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
        d="M1 3.75A1.75 1.75 0 0 1 2.753 2l5 .008A1.75 1.75 0 0 1 9.5 3.758v15.99a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 1 19.748z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.756 2.256a.875.875 0 0 1 1.238 0L19 4.263l2.006-2.006a.875.875 0 0 1 1.238 1.237L20.238 5.5l2.006 2.006a.875.875 0 0 1-1.238 1.237L19 6.737l-2.006 2.007a.875.875 0 0 1-1.238-1.238L17.763 5.5l-2.007-2.006a.875.875 0 0 1 0-1.238"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.437 2.001 13.753 2A1.75 1.75 0 0 0 12 3.75v15.998c0 .967.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-9.82a2 2 0 0 1-.378-.3L19 8.504l-1.122 1.123a2.125 2.125 0 0 1-3.005-3.006L15.995 5.5l-1.122-1.122A2.13 2.13 0 0 1 14.437 2"
      />
    </svg>
  );
};
export default ColumnDelete;
