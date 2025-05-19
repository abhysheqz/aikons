import React from "react";
const ListView: React.FC<
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
        d="M2 4.75C2 3.784 2.784 3 3.75 3h16c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 5.75zM2 11.25c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 19.75 14h-16A1.75 1.75 0 0 1 2 12.25zM2 17.75c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 18.75z"
      />
    </svg>
  );
};
export default ListView;
