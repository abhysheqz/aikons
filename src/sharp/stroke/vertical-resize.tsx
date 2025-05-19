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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10h16M4 14h16M12 10V6M12 18v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.993 18.006 2.982-1c.009-.003.017.007.012.015l-3.034 4.971a.01.01 0 0 1-.017 0L9.01 17.018a.01.01 0 0 1 .012-.014zM12.007 5.991l-2.982 1a.01.01 0 0 1-.012-.015l2.941-4.964a.01.01 0 0 1 .018 0l3.017 4.966a.01.01 0 0 1-.012.015z"
      />
    </svg>
  );
};
export default VerticalResize;
