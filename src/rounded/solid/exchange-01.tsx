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
        d="M12 4a8 8 0 0 0-1.779.198 1 1 0 0 1-.442-1.95A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5h.9a1 1 0 1 1 0 2h-3.523a1 1 0 0 1-1-1V16a1 1 0 1 1 2 0v1.318A8 8 0 0 0 12 4m-9.5.516a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1V8a1 1 0 0 1-2 0V6.708a8 8 0 0 0 7.779 13.094 1 1 0 1 1 .442 1.95c-.715.163-1.459.248-2.221.248-5.523 0-10-4.477-10-10 0-2.475.9-4.74 2.387-6.484H3.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Exchange_01;
