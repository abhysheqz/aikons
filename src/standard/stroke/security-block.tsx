import React from "react";
const SecurityBlock: React.FC<
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
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.345 4.573C3.585 4.705 3 5.348 3 6.123v4.928c0 6.429 6.538 9.935 8.469 10.83.34.159.721.159 1.062 0 1.057-.49 3.494-1.762 5.483-3.867M7.703 3.703a24.6 24.6 0 0 0 3.482-1.501 1.75 1.75 0 0 1 1.63 0c1.24.656 3.78 1.84 6.84 2.371.76.132 1.345.775 1.345 1.55v4.928c0 1.782-.502 3.34-1.27 4.68"
      />
    </svg>
  );
};
export default SecurityBlock;
