import React from "react";
const StopCircle: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.389 15.163c.504.337 1.207.337 2.611.337s2.107 0 2.611-.337c.218-.146.406-.334.552-.552.337-.504.337-1.207.337-2.611s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 8.5 13.404 8.5 12 8.5s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 9.893 8.5 10.596 8.5 12s0 2.107.337 2.611a2 2 0 0 0 .552.552"
      />
    </svg>
  );
};
export default StopCircle;
