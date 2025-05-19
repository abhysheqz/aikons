import React from "react";
const Stars: React.FC<
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
        d="M3 12c4.5 0 9-4.5 9-9 0 4.5 4.5 9 9 9-4.5 0-9 4.5-9 9 0-4.5-4.5-9-9-9ZM2 19.5c.833 0 2.5-1.667 2.5-2.5 0 .833 1.667 2.5 2.5 2.5-.833 0-2.5 1.667-2.5 2.5 0-.833-1.667-2.5-2.5-2.5ZM16 5c1 0 3-2 3-3 0 1 2 3 3 3-1 0-3 2-3 3 0-1-2-3-3-3Z"
      />
    </svg>
  );
};
export default Stars;
