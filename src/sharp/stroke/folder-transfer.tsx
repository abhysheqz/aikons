import React from "react";
const FolderTransfer: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 3.5c4.2 0 6 2.4 6 6H21l-1.5-1M8.5 20.5c-4.2 0-6-2.4-6-6H3l1.5 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m6.5 2.496-4 .004v9h10v-7l-5 .012zM17.5 12.5l4 .004v9h-10v-7l5 .012z"
      />
    </svg>
  );
};
export default FolderTransfer;
