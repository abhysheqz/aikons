import React from "react";
const MoreHorizontal: React.FC<
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
        d="M10.492 12a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 0 3h-.01a1.5 1.5 0 0 1-1.5-1.5M16.492 12a1.5 1.5 0 0 1 1.5-1.5h.009a1.5 1.5 0 0 1 0 3h-.009a1.5 1.5 0 0 1-1.5-1.5M4.5 12A1.5 1.5 0 0 1 6 10.5h.009a1.5 1.5 0 0 1 0 3h-.01A1.5 1.5 0 0 1 4.5 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreHorizontal;
