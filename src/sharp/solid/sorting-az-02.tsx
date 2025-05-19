import React from "react";
const SortingAz_02: React.FC<
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
        d="M7.723 15H3.942v-2h6.5v1.862L6.16 20h3.782v2h-6.5v-1.862zM5.737 2h2.41l2.736 7.664L9 10.336 6.942 4.573l-2.059 5.763L3 9.664zM18.293 4v12.172l1.293-1.293L21 16.293 17.293 20l-3.707-3.707L15 14.879l1.293 1.293V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingAz_02;
