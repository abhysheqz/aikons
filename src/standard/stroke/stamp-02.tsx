import React from "react";
const Stamp_02: React.FC<
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
        d="M14.559 15H9.442a2 2 0 0 0-1.898 1.367L7 18h10l-.544-1.633A2 2 0 0 0 14.559 15ZM17.438 18H6.562a2 2 0 0 0-1.94 1.515l-.467 1.864A.5.5 0 0 0 4.64 22h14.72a.5.5 0 0 0 .485-.621l-.466-1.864A2 2 0 0 0 17.439 18Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.945 15c0-.998-.033-3.365-1.78-6.73C7.388 6.777 7.505 4 7.505 4 8.446 3 10 2 12 2s3.555 1 4.494 2c0 0 .117 2.777-.658 4.27-1.748 3.365-1.781 5.732-1.781 6.73"
      />
    </svg>
  );
};
export default Stamp_02;
