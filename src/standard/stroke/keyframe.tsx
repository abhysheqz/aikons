import React from "react";
const Keyframe: React.FC<
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
        d="m19.516 10.692-5.968-6.98a2.04 2.04 0 0 0-3.096 0l-5.968 6.98a2.01 2.01 0 0 0 0 2.616l5.968 6.98a2.04 2.04 0 0 0 3.096 0l5.968-6.98a2.01 2.01 0 0 0 0-2.616Z"
      />
    </svg>
  );
};
export default Keyframe;
