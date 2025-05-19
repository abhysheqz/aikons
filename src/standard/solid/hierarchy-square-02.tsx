import React from "react";
const HierarchySquare_02: React.FC<
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
        d="M9 1.25A1.75 1.75 0 0 0 7.25 3v4c0 .966.784 1.75 1.75 1.75h2V11H7a3 3 0 0 0-3 3v1.25H3A1.75 1.75 0 0 0 1.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 8.75 21v-4A1.75 1.75 0 0 0 7 15.25H6V14a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.25h-1A1.75 1.75 0 0 0 15.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 22.75 21v-4A1.75 1.75 0 0 0 21 15.25h-1V14a3 3 0 0 0-3-3h-4V8.75h2A1.75 1.75 0 0 0 16.75 7V3A1.75 1.75 0 0 0 15 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_02;
