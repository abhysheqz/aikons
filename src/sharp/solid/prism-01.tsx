import React from "react";
const Prism_01: React.FC<
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
        d="M12 2.25c.355 0 .682.192.854.502l2.932 5.265-1.708.947L12 5.233l-2.775 4.983 10.578 5.015 2.824 5.07a.973.973 0 0 1-.854 1.449H2.227a.973.973 0 0 1-.854-1.448l9.773-17.55c.172-.31.5-.502.854-.502"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.108 9.723 7.958-1.726-.418-1.975L7.71 9.046l-5.96 1.006.328 1.991 5.695-.96 13.691 5.94.786-1.856-7.769-3.37 6.729.758.22-2.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prism_01;
