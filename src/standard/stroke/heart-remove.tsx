import React from "react";
const HeartRemove: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 13.5 2.5 2.5m0 0 2.5 2.5M18.5 16l2.5-2.5M18.5 16 16 18.5M13 19.856c-.617.414-1 .644-1 .644S2 14.5 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5 2-2 3.5-2.5 5-2.5 2.895 0 5 2.326 5 5.194 0 .435-.056.871-.16 1.306"
      />
    </svg>
  );
};
export default HeartRemove;
