import React from "react";
const Folders: React.FC<
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
        d="M21 6.5h-7.105l-2.842-4H3M8.684 9H12m0 0h9v12.5H3v-16h6.632z"
      />
    </svg>
  );
};
export default Folders;
