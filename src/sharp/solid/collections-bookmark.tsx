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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 4.75h-14a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1m-10 2v6l3-2 3 2v-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 3.25h-11v-2h12a1 1 0 0 1 1 1v16h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CollectionsBookmark;
