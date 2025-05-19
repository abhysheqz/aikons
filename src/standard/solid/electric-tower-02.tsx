import React from "react";
const ElectricTower_02: React.FC<
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
        d="M3.898 22.448a.75.75 0 0 0 .602.302h15a.75.75 0 0 0 .718-.966l-4.5-15A.75.75 0 0 0 15 6.25H9a.75.75 0 0 0-.718.534l-4.5 15a.75.75 0 0 0 .116.664m1.61-1.198 4.05-13.5h4.884l4.05 13.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.4 7.55a.75.75 0 0 1 1.05-.15L12 9.312 14.55 7.4a.75.75 0 1 1 .9 1.2l-2.2 1.65 4.2 3.15a.75.75 0 0 1-.034 1.224l-4.064 2.71 6.064 4.042a.75.75 0 1 1-.832 1.248L12 18.234l-6.584 4.39a.75.75 0 1 1-.832-1.248l6.064-4.043-4.064-2.709A.75.75 0 0 1 6.55 13.4l4.2-3.15-2.2-1.65a.75.75 0 0 1-.15-1.05m3.6 3.638-3.702 2.776L12 16.432l3.702-2.468z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 22a.75.75 0 0 1 .75-.75h20a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1-.75-.75M8.52 1.424A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 .48.174l6 5a.75.75 0 0 1 .27.576v2a.75.75 0 0 1-1.5 0V7.75H3.75V9a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .27-.576zM5.072 6.25H8.25V3.601zm4.678-3.5v3.5h4.5v-3.5zm6 .851 3.178 2.649H15.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricTower_02;
