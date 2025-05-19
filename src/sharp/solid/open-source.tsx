import React from "react";
const OpenSource: React.FC<
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
        d="M1.25 12.353C1.25 6.497 6.063 1.75 12 1.75s10.75 4.747 10.75 10.603c0 4.198-2.474 7.824-6.058 9.542l-.742.355-2.62-6.914.489-.326a3.19 3.19 0 0 0 1.431-2.657c0-1.77-1.455-3.206-3.25-3.206s-3.25 1.435-3.25 3.206a3.19 3.19 0 0 0 1.431 2.657l.49.326L8.05 22.25l-.742-.355C3.724 20.177 1.25 16.55 1.25 12.353"
      />
    </svg>
  );
};
export default OpenSource;
