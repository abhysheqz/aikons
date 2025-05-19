import React from "react";
const TimeQuarter: React.FC<
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
        d="M1.683 14.051a1 1 0 0 1 1.266.632q.195.585.456 1.134a1 1 0 1 1-1.808.856 12 12 0 0 1-.545-1.356 1 1 0 0 1 .631-1.266m1.79 3.937a1 1 0 0 1 1.41.106q.433.502.925.941a1 1 0 0 1-1.332 1.492 12 12 0 0 1-1.108-1.129 1 1 0 0 1 .106-1.41m3.32 3.064a1 1 0 0 1 1.333-.473 10 10 0 0 0 1.181.469 1 1 0 1 1-.613 1.904 12 12 0 0 1-1.427-.567 1 1 0 0 1-.473-1.333M9.708 11A2.5 2.5 0 1 1 13 14.292V16a1 1 0 1 1-2 0v-1.708A2.5 2.5 0 0 1 9.708 13H6a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 13a1 1 0 0 1-1-1C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11a1 1 0 1 1 0-2 9 9 0 1 0-9-9 1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarter;
