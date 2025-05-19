import React from "react";
const Bookmark_01: React.FC<
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
        d="M4.5 7.5h15M12 17.5l7.5 4v-17a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v17z"
      />
    </svg>
  );
};
export default Bookmark_01;
