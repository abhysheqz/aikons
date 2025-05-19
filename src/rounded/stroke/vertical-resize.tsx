import React from "react";
const VerticalResize: React.FC<
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
        d="M4 10h16M4 14h16M12 10V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.95 2c1.035-.03 3.47 4.008 2.987 4.389-.548.431-2.177-.6-2.695-.832-.312-.14-.448-.136-.76.023-1.406.717-2.11 1.075-2.414.856l-.003-.002C8.58 6.08 10.939 2.03 11.95 2ZM12.05 22c-1.035.03-3.47-4.008-2.987-4.389.548-.431 2.177.6 2.695.832.312.14.448.136.76-.023 1.406-.717 2.11-1.075 2.414-.856l.003.002c.485.354-1.874 4.404-2.885 4.434Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v-4"
      />
    </svg>
  );
};
export default VerticalResize;
