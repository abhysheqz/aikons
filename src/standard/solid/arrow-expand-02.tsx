import React from "react";
const ArrowExpand_02: React.FC<
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
        d="M21 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H4v4a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414M13.293 13.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowExpand_02;
