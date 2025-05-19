import React from "react";
const CollectionsBookmark: React.FC<
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
        d="M3 5h15v17H3z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.5 5v7l3-2 3 2V5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2h12v16"
      />
    </svg>
  );
};
export default CollectionsBookmark;
