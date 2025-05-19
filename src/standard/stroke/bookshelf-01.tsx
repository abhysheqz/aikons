import React from "react";
const Bookshelf_01: React.FC<
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
      <rect
        width={18}
        height={18}
        x={3}
        y={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 20v2m14-2v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 11h18"
      />
      <path
        fill="currentColor"
        d="M12.196 5.721a.75.75 0 0 0-1.392.558zM7.75 6a.75.75 0 0 0-1.5 0zm10 0a.75.75 0 0 0-1.5 0zm-3.554 4.722-2-5-1.392.557 2 5zM7.75 11V6h-1.5v5zm10 0V6h-1.5v5zM8.75 15a.75.75 0 0 0-1.5 0zm4 0a.75.75 0 0 0-1.5 0zm4.984.155a.75.75 0 0 0-1.468-.31zM8.75 19.5V15h-1.5v4.5zm4 0V15h-1.5v4.5zm4.043.125.94-4.47-1.467-.31-.941 4.471z"
      />
    </svg>
  );
};
export default Bookshelf_01;
