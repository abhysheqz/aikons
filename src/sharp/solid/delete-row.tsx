import React from "react";
const DeleteRow: React.FC<
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
        d="m9 13.422 3 3 3-3 1.414 1.414-3 3 3 3L15 22.25l-3-3-3 3-1.414-1.414 3-3-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 1.75h5.25v6h-6V2.5A.75.75 0 0 1 3 1.75M14.25 1.75h-4.5v6h4.5zM21.75 7.75V2.5a.75.75 0 0 0-.75-.75h-5.25v6zM2.25 9.25h19.5V20.5a.75.75 0 0 1-.75.75h-3.231l.413-.414-3-3 3-3L15 11.654l-3 3-3-3-3.182 3.182 3 3-3 3 .414.414H3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default DeleteRow;
