import React from "react";
const MirroringScreen: React.FC<
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
        strokeWidth={1.5}
        d="M4 21a2 2 0 0 0-2-2m6 2a6 6 0 0 0-6-6m10 6c0-5.523-4.477-10-10-10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 8c.078-1.872.329-3.02 1.139-3.828C5.312 3 7.202 3 10.979 3h3.006c3.778 0 5.668 0 6.841 1.172S22 7.229 22 11v1c0 3.772 0 5.658-1.174 6.83-1.065 1.062-2.719 1.16-5.839 1.17"
      />
    </svg>
  );
};
export default MirroringScreen;
