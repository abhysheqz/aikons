import React from "react";
const HierarchySquare_07: React.FC<
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
        d="M12 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 5.5c-2.197 0-4 1.716-4 4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1c0-2.284-1.805-4-4-4m-8 9.499A3 3 0 0 1 7 13h10a3 3 0 0 1 3 3v.25h1c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 21 22.75h-4A1.75 1.75 0 0 1 15.25 21v-3c0-.966.784-1.75 1.75-1.75h1V16a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v.25h1c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 7 22.75H3A1.75 1.75 0 0 1 1.25 21v-3c0-.966.784-1.75 1.75-1.75h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_07;
