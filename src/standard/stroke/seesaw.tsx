import React from "react";
const Seesaw: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 18h8M13.5 18v-5m-3 1v4M15.914 6.632l1.41-.316m0 0L18.734 6m-1.41.316.65 2.738M3.698 9.37l1.41-.316m0 0 1.41-.316m-1.41.316.65 2.738M2 12.635l19.733-4.424.217.913c.24 1.008-.407 2.013-1.445 2.246L4.53 14.952c-1.038.232-2.073-.396-2.313-1.404z"
      />
    </svg>
  );
};
export default Seesaw;
