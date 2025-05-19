import React from "react";
const FolderOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.368 2.368A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h16c.503 0 .974-.135 1.38-.37zM22.742 19.207q.008-.103.008-.207V8.994A2.75 2.75 0 0 0 20 6.244h-7.609L9.898 2.945a1.75 1.75 0 0 0-1.396-.695H5.786z"
      />
    </svg>
  );
};
export default FolderOff;
