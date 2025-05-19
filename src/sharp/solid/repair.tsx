import React from "react";
const Repair: React.FC<
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
        d="M14.495 3.495a4.24 4.24 0 0 1 3.574-1.207 6 6 0 0 1 1.431.273L17 5.06V7h1.94l2.5-2.5c.077.288.242.977.272 1.431a4.248 4.248 0 0 1-5.267 4.686l-5.828 5.828a4.25 4.25 0 0 1-1.112 4.06 4.24 4.24 0 0 1-3.574 1.207 5.6 5.6 0 0 1-1.431-.273l2.5-2.5V17H5.06l-2.5 2.5c-.078-.288-.242-.977-.272-1.431a4.24 4.24 0 0 1 1.207-3.574 4.25 4.25 0 0 1 4.063-1.112l5.825-5.825a4.25 4.25 0 0 1 1.112-4.063"
      />
      <path
        fill="currentColor"
        d="m4.352 2.588 4.415 2.207-1.279 1.279 2.806 2.806-1.414 1.414-2.806-2.806-1.279 1.279-2.207-4.415zM12.385 16.446l5.054 5.054 4.06-4.06-5.053-5.054z"
      />
    </svg>
  );
};
export default Repair;
