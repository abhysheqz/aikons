import React from "react";
const HandPointingLeft_02: React.FC<
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
        d="M13.928 4.395a3.8 3.8 0 0 1 1.12-.144c.378.009.781.043 1.281.211.486.164 1.031.443 1.724.898h.001l2.947 1.92a2.75 2.75 0 0 1 1.249 2.304V16a3.75 3.75 0 0 1-3.75 3.75h-5A3.75 3.75 0 0 1 9.75 16v-3.75h-5.5a2.5 2.5 0 0 1 0-5h5.954l1.139-1.068.019-.017.023-.02c.525-.46.953-.834 1.33-1.113.393-.291.773-.511 1.213-.637"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandPointingLeft_02;
