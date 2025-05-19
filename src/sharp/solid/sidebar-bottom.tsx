import React from "react";
const SidebarBottom: React.FC<
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
        d="M22.75 13.75H1.25V3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-5.75H1.25zM5 17.75h2v1.5H5zm4 0h2v1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SidebarBottom;
