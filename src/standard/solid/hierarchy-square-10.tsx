import React from "react";
const HierarchySquare_10: React.FC<
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
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 15 7.75h-2v2.395a3.51 3.51 0 0 1 2.355 2.355H17.5a3 3 0 0 1 3 3v1.75h.5c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 21 22.75h-3A1.75 1.75 0 0 1 16.25 21v-2c0-.966.784-1.75 1.75-1.75h.5V15.5a1 1 0 0 0-1-1h-2.145a3.502 3.502 0 0 1-6.71 0H6.499a1 1 0 0 0-1 1v1.75H6c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 6 22.75H3A1.75 1.75 0 0 1 1.25 21v-2c0-.966.784-1.75 1.75-1.75h.499V15.5a3 3 0 0 1 3-3h2.146A3.51 3.51 0 0 1 11 10.145V7.75H9A1.75 1.75 0 0 1 7.25 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_10;
