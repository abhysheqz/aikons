import React from "react";
const DiscoverSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm12.854 4.896a.5.5 0 0 1 .121.512l-2.178 6.55a2.5 2.5 0 0 1-1.583 1.583l-6.556 2.183a.5.5 0 0 1-.632-.632l2.177-6.545a2.5 2.5 0 0 1 1.58-1.582l6.56-2.19a.5.5 0 0 1 .511.121M13 11.984A1 1 0 0 1 12.014 13h-.006a1 1 0 0 1-.031-2h.006a1 1 0 0 1 1.015.984"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscoverSquare;
