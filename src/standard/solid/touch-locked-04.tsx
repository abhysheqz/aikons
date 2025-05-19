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
        d="M14.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H20a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm3 .75h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 3.75v5.954l-1.068 1.139-.017.019-.02.023c-.46.525-.834.953-1.113 1.33-.291.393-.511.773-.637 1.213a3.8 3.8 0 0 0-.144 1.12c.009.378.043.781.211 1.281.164.486.443 1.031.898 1.724v.001l1.92 2.947a2.75 2.75 0 0 0 2.304 1.249h3.166V17c0-1 .652-1.848 1.555-2.14a3.75 3.75 0 0 1 5.344-2.729A3.75 3.75 0 0 0 15 9.25h-3.75v-5.5a2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
export default TouchLocked_04;
