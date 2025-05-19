import React from "react";
const Hat: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.5 14-2.153 1.722a.93.93 0 0 0-.347.723c0 .341.187.658.496.803C4.79 18.32 8.196 19 12 19s7.211-.68 9.503-1.752a.88.88 0 0 0 .497-.803.93.93 0 0 0-.347-.723L19.5 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15c3.067 0 5.79-.393 7.5-1l-.703-6.331A3 3 0 0 0 15.815 5h-7.63a3 3 0 0 0-2.982 2.669L4.5 14c1.71.607 4.433 1 7.5 1M11 10h2"
      />
    </svg>
  );
};
export default Hat;
