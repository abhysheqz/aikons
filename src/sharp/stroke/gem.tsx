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
        d="M22 16 12 2 2 15.5 12 22zM12 2l2 12m8 2-8-2m-2 8 2-8M2 15.5 14 14"
      />
    </svg>
  );
};
export default Gem;
