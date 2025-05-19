import React from "react";
const ComingSoon_02: React.FC<
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
        d="M2.75 13.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0m12.666-5.124a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208m-2.08-.485q.157-.234.36-.408A6.25 6.25 0 1 0 12 19.75V15.5a2 2 0 0 1-1.664-3.11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M9.75 3.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComingSoon_02;
