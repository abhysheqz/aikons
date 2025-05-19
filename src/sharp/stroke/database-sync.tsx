import React from "react";
const DatabaseSync: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 16 1.523 1.594c.514-1.866 2.488-2.974 4.409-2.474a3.58 3.58 0 0 1 2.218 1.686M22 21l-1.523-1.594c-.514 1.866-2.488 2.974-4.409 2.474a3.58 3.58 0 0 1-2.186-1.63"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 13V2H2v18h9M2 11h18M10 6.5h7m-9 0H5M8 15.5H5"
      />
    </svg>
  );
};
export default DatabaseSync;
