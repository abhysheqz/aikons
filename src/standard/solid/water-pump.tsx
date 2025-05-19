import React from "react";
const WaterPump: React.FC<
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
        d="M7.375 21.625a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M7.875 5.625a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.174 3.35a3 3 0 0 1 2.715-1.725h5.736a1 1 0 1 1 0 2H7.89a1 1 0 0 0-.905.575L3.53 11.55a1 1 0 0 1-1.81-.85z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.61 5.625v-3h2v3zM19.6 15.09a.75.75 0 0 1 1.05 0c1.183 1.158 1.808 2.367 1.716 3.424a1.94 1.94 0 0 1-.727 1.383c-.42.333-.954.478-1.514.478s-1.095-.145-1.515-.478c-.43-.34-.678-.83-.726-1.383-.092-1.058.533-2.266 1.716-3.425"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.875 10.865h1.003v1.76c0 .414.336.75.75.75h2.992a.75.75 0 0 0 .75-.75V10.64c.064-1.55-.5-2.632-1.3-3.32a4.03 4.03 0 0 0-2.389-.945h-1.806zM9.367 13.875v7.75c0 .414.336.75.75.75h2.996a.75.75 0 0 0 .75-.75v-7.75z"
      />
    </svg>
  );
};
export default WaterPump;
