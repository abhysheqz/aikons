import React from "react";
const PointingLeft_04: React.FC<
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
        d="M14.428 6.395a3.8 3.8 0 0 1 1.12-.144c.378.009.781.043 1.281.211.486.164 1.031.443 1.724.898h.001l4.196 2.734V19A3.75 3.75 0 0 1 19 22.75h-6A3.75 3.75 0 0 1 9.25 19v-4.834h-4.5a2.5 2.5 0 0 1 0-5h5.968l1.144-1 .023-.021c.525-.46.953-.834 1.33-1.113.393-.291.773-.511 1.213-.637"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.078 5.457.793.793-1.414 1.414L1.25 4.457 4.457 1.25l1.414 1.414-.793.793h3.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_04;
