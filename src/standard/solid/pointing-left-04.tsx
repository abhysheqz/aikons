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
        fillRule="evenodd"
        d="M13.928 6.895a3.8 3.8 0 0 1 1.12-.144c.378.009.78.043 1.281.211.486.164 1.03.443 1.724.898h.001l2.947 1.92a2.75 2.75 0 0 1 1.249 2.304V18.5a3.75 3.75 0 0 1-3.75 3.75h-5a3.75 3.75 0 0 1-3.75-3.75v-3.75h-5.5a2.5 2.5 0 0 1 0-5h5.953l1.14-1.068.019-.017.023-.02c.525-.46.952-.834 1.33-1.113.393-.291.772-.511 1.213-.637M5.707 1.793a1 1 0 0 1 0 1.414L4.914 4H8.5a1 1 0 1 1 0 2H4.914l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_04;
