import React from "react";
const MessageAdd_01: React.FC<
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
        d="M7.493 15h8.99m-8.99-5h5.493M13.985 6h7.99M17.98 2v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.755 3.02c-.367-.007-.798-.019-1.192 0C4.299 3.148 2 7.587 2 12.571c0 1.704.347 3.79 1.6 5.43l-1.586 3.977a.01.01 0 0 0 .012.013l4.55-1.462c1.5.83 3.2 1.013 5.083 1.013 6.492.456 10.31-3.749 10.31-8.733.014-.62.066-1.258 0-1.875"
      />
    </svg>
  );
};
export default MessageAdd_01;
