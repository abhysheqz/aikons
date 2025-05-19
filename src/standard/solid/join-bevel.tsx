import React from "react";
const JoinBevel: React.FC<
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
        d="M2 13.672V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H10.328a2 2 0 0 1-1.414-.586l-6.328-6.328A2 2 0 0 1 2 13.672"
      />
    </svg>
  );
};
export default JoinBevel;
