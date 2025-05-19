import React from "react";
const Progress_02: React.FC<
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
        fill="currentColor"
        d="M19 12a.475.475 0 0 0 .483-.5A7.5 7.5 0 0 0 12.5 4.517.475.475 0 0 0 12 5v6.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );
};
export default Progress_02;
