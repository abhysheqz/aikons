import React from "react";
const Structure_03: React.FC<
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
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 15 7.75h-2V10h5.001a3 3 0 0 1 3 2.999v.751a1.75 1.75 0 0 1 1.749 1.75v2A1.75 1.75 0 0 1 21 19.25h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h.002V13a1 1 0 0 0-1-1H13v1.407a3.252 3.252 0 0 1 0 6.186V22a1 1 0 1 1-2 0v-2.407a3.252 3.252 0 0 1 0-6.186V12H6.002a1 1 0 0 0-1 1v.75A1.75 1.75 0 0 1 6.75 15.5v2A1.75 1.75 0 0 1 5 19.25H3a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h.002V13a3 3 0 0 1 3-3H11V7.75H9A1.75 1.75 0 0 1 7.25 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_03;
