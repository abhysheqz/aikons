import React from "react";
const PenTool_03: React.FC<
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
        d="M11.984 5.992 14.981 2l6.993 6.986-3.996 2.994"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.047 11.945-6.014-5.97-7.562 3.537-1.51 11.486a.01.01 0 0 0 .01.01l11.497-1.545z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.519 15.572 9.938 14.01m0 0-1.526-1.524m1.526 1.524-6.281 6.286"
      />
    </svg>
  );
};
export default PenTool_03;
