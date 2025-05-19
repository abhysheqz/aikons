import React from "react";
const MoveTo: React.FC<
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
        d="M8 5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 5a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M8 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 11.007a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M4 17.014a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.708 14.293A1 1 0 0 0 15 15v1.014H9a1 1 0 1 0 0 2h6V19a1 1 0 0 0 1.707.708l2-1.998a1 1 0 0 0 0-1.414z"
      />
    </svg>
  );
};
export default MoveTo;
