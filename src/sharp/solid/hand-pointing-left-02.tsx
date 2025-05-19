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
        d="M13.928 3.895a3.8 3.8 0 0 1 1.12-.144c.378.009.781.043 1.281.211.486.164 1.031.443 1.724.898h.001l4.196 2.733V16.5a3.75 3.75 0 0 1-3.75 3.75h-6a3.75 3.75 0 0 1-3.75-3.75v-4.834h-4.5a2.5 2.5 0 0 1 0-5h5.968l1.167-1.021c.525-.46.953-.834 1.33-1.113.393-.291.773-.511 1.213-.637"
      />
    </svg>
  );
};
export default HandPointingLeft_02;
