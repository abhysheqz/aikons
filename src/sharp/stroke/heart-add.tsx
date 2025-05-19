import React from "react";
const HeartAdd: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 16h3.5m0 0H21m-3.5 0v-3.5m0 3.5v3.5M13.522 19.5c-.915.636-1.522 1-1.522 1S2 14.5 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5 2-2 3.5-2.5 5-2.5 2.895 0 5 2.326 5 5.194 0 .786-.183 1.576-.5 2.353"
      />
    </svg>
  );
};
export default HeartAdd;
