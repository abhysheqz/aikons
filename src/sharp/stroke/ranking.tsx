import React from "react";
const Ranking: React.FC<
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
        d="M9 14.992H3.5V22H9zM20.5 16.994H15V22h5.5zM15 12.989H9V22h6zM2 22h20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.96 2.02a.05.05 0 0 1 .081 0l1.649 2.248 2.813.743a.01.01 0 0 1 .005.016l-1.812 2.209.084 2.685a.05.05 0 0 1-.066.05L12 9.052l-2.706.917a.05.05 0 0 1-.066-.048l.069-2.686-1.731-2.143a.05.05 0 0 1 .026-.08l2.72-.745z"
      />
    </svg>
  );
};
export default Ranking;
