import React from "react";
const HierarchySquare_03: React.FC<
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
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 15 10.75H9A1.75 1.75 0 0 1 7.25 9zM3 15.25A1.75 1.75 0 0 0 1.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 8.75 21v-4A1.75 1.75 0 0 0 7 15.25H6V15a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.25h-1A1.75 1.75 0 0 0 15.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 22.75 21v-4A1.75 1.75 0 0 0 21 15.25h-1V15a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_03;
