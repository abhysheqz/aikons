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
        fill="currentColor"
        fillRule="evenodd"
        d="M9.882 3.224a2.79 2.79 0 0 1 4.236 0l5.968 6.98a2.76 2.76 0 0 1 0 3.592l-5.968 6.98a2.79 2.79 0 0 1-4.236 0l-5.968-6.98a2.76 2.76 0 0 1 0-3.591z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Keyframe;
