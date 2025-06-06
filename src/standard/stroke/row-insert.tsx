import React from "react";
const RowInsert: React.FC<
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
        d="M20 3H9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM20 14H9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 9 3 3-3 3"
      />
    </svg>
  );
};
export default RowInsert;
