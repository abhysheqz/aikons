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
        d="M6.75 2a1 1 0 0 0 0 2h12a1 1 0 0 1 1 1v12a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3zM2 8a2.75 2.75 0 0 1 2.75-2.75h11A2.75 2.75 0 0 1 18.5 8v12a2.75 2.75 0 0 1-2.75 2.75h-11A2.75 2.75 0 0 1 2 20zm8.106-1.25a.357.357 0 0 0-.357.357v4.916l1.831-1.466a1.07 1.07 0 0 1 1.34 0l1.83 1.466V7.107a.357.357 0 0 0-.357-.357z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CollectionsBookmark;
