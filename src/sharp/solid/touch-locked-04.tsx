import React from "react";
const TouchLocked_04: React.FC<
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
        d="M17 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75A2.25 2.25 0 0 0 17 13.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.166 3.75v5.968l-1.021 1.167c-.46.525-.834.953-1.113 1.33-.291.393-.511.773-.637 1.213a3.8 3.8 0 0 0-.144 1.12c.009.378.043.781.211 1.281.164.486.443 1.031.898 1.724v.001l2.733 4.196h4.657v-7h1.575a3.751 3.751 0 0 1 6.425-1.8V12A3.75 3.75 0 0 0 16 8.25h-4.834v-4.5a2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
export default TouchLocked_04;
