import React from "react";
const Uv_02: React.FC<
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
        d="M17 13a5 5 0 0 0-10 0M18.999 6 17.5 7.499M12 3v2m10 8h-2M4 13H2m4.5-5.501L5.001 6M13 16l2 5h1l2-5M10 16v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4"
      />
    </svg>
  );
};
export default Uv_02;
