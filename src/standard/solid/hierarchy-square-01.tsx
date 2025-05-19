import React from "react";
const HierarchySquare_01: React.FC<
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
        d="M4 1.25A1.75 1.75 0 0 0 2.25 3v4c0 .966.784 1.75 1.75 1.75h2v8.75a3 3 0 0 0 3 3h4.25v.5c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 20.75 21v-3A1.75 1.75 0 0 0 19 16.25h-4A1.75 1.75 0 0 0 13.25 18v.5H9a1 1 0 0 1-1-1v-5h5.25v.5c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 20.75 13v-3A1.75 1.75 0 0 0 19 8.25h-4A1.75 1.75 0 0 0 13.25 10v.5H8V8.75h2A1.75 1.75 0 0 0 11.75 7V3A1.75 1.75 0 0 0 10 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_01;
