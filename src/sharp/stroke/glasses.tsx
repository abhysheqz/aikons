import React from "react";
const Glasses: React.FC<
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
        d="M22 13.992 17.5 4 16 5.499M2 13.992 6.5 4 8 5.499M10.5 15.49h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.505 13.974H2.033a.01.01 0 0 0-.008.015l1.008 2.005-.075 3.993q0 .01.01.01h7.537a.01.01 0 0 0 .01-.01v-6.003a.01.01 0 0 0-.01-.01ZM13.518 13.974h8.472a.01.01 0 0 1 .009.015l-1.01 2.005.077 3.993a.01.01 0 0 1-.01.01h-7.538a.01.01 0 0 1-.01-.01v-6.003a.01.01 0 0 1 .01-.01Z"
      />
    </svg>
  );
};
export default Glasses;
