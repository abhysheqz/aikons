import React from "react";
const DeleteColumn: React.FC<
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
        d="m22.25 9-3 3 3 3-1.414 1.414-3-3-3 3L13.422 15l3-3-3-3 1.414-1.414 3 3 3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 2.25H2.5a.75.75 0 0 0-.75.75v5.25h6zM1.75 9.75v4.5h6v-4.5zM1.75 21v-5.25h6v6H2.5a.75.75 0 0 1-.75-.75M9.25 21.75V2.25H20.5a.75.75 0 0 1 .75.75v3.232l-.414-.414-3 3-3-3L11.654 9l3 3-3 3 3.182 3.182 3-3 3 3 .414-.413V21a.75.75 0 0 1-.75.75z"
      />
    </svg>
  );
};
export default DeleteColumn;
