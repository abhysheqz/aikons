import React from "react";
const Exchange_01: React.FC<
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
        d="M12 4a8 8 0 0 0-1.779.198l-.442-1.95A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5h1.9v2h-5.523V15h2v2.318A8 8 0 0 0 12 4m-9.5-.484H8V9H6V6.708a8 8 0 0 0 7.779 13.094l.442 1.95c-.715.163-1.459.248-2.221.248-5.523 0-10-4.477-10-10 0-2.475.9-4.74 2.387-6.484H2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Exchange_01;
