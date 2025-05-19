import React from "react";
const Directions_02: React.FC<
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
        d="M11 2a1 1 0 0 1 1-1h5a1 1 0 0 1 .78.375l2 2.5a1 1 0 0 1 0 1.25l-2 2.5A1 1 0 0 1 17 8h-5a1 1 0 0 1-1-1zM8 22a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.7 6.25H7a.75.75 0 0 0-.586.281l-2 2.5a.75.75 0 0 0 0 .938l2 2.5A.75.75 0 0 0 7 12.75h2.7zM14.3 17.75H17a.75.75 0 0 0 .586-.282l2-2.5a.75.75 0 0 0 0-.937l-2-2.5A.75.75 0 0 0 17 11.25h-2.7z"
      />
    </svg>
  );
};
export default Directions_02;
