import React from "react";
const Directions_02: React.FC<
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
        d="M12.006 22V3M9.008 22h5.994"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.001 2.004h-4.985a.01.01 0 0 0-.01.01v4.978q0 .009.01.01H17l2.007-2.503zM17.001 12h-4.985a.01.01 0 0 0-.01.01v4.978q0 .01.01.01H17l2.007-2.503zM7.01 7.001h4.986a.01.01 0 0 1 .01.01v4.978a.01.01 0 0 1-.01.01H7.01L5.004 9.496z"
      />
    </svg>
  );
};
export default Directions_02;
