import React from "react";
const EditTable: React.FC<
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
        d="m21.75 16.75-2-2-5 5v2h2zM2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v6.25H2.25zM19.129 13.25H12.75v-2.5h8.879zM12.75 14.75h4.879l-2.5 2.5H12.75zM11.25 18.75v3H3a.75.75 0 0 1-.75-.75v-2.25zM11.25 17.25h-9v-2.5h9zM11.25 13.25h-9v-2.5h9z"
      />
    </svg>
  );
};
export default EditTable;
