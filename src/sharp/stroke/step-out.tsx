import React from "react";
const StepOut: React.FC<
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
        d="M3 20.985h5.994M14.988 20.985h5.995"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.986 17.984V7.109a.1.1 0 0 1 .1-.1h8.198m-2.258-3.02L21 7.008l-2.973 2.989"
      />
    </svg>
  );
};
export default StepOut;
