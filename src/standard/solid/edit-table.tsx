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
        d="m22.2 17.2-2-2-5 5v2h2zM5.45 1.7A3.75 3.75 0 0 0 1.7 5.45V7.2h20.5V5.45a3.75 3.75 0 0 0-3.75-3.75zM22.2 8.7h-9.5v3.5h9.5zM16.432 17.2l3.5-3.5H12.7v3.5zM14.932 18.7H12.7v3.5h1.25v-2.518zM11.2 13.7v3.5H1.7v-3.5zM1.708 18.7H11.2v3.5H5.45a3.75 3.75 0 0 1-3.742-3.5M11.2 12.2H1.7V8.7h9.5z"
      />
    </svg>
  );
};
export default EditTable;
