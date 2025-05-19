import React from "react";
const InsertCenterImage: React.FC<
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
        d="M2.25 2.25h18v2h-18zM2.25 19.75h11v2h-11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 7A.75.75 0 0 1 3 6.25h18a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default InsertCenterImage;
