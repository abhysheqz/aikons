import React from "react";
const Gem: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.37 15.119-8.571-12a1 1 0 0 0-1.617-.014l-8.55 11.54a1 1 0 0 0 .26 1.434l8.584 5.58a1 1 0 0 0 1.06.02l8.535-5.122a1 1 0 0 0 .3-1.438ZM12 2.5 14 14m7.5 2L14 14m-2 8 2-8M3 15.5 14 14"
      />
    </svg>
  );
};
export default Gem;
