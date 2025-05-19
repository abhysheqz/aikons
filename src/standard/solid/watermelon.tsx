import React from "react";
const Watermelon: React.FC<
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
        d="M18.634 2.485a.75.75 0 0 0-1.075-.015L16.01 4.017l.467.428.04.038a8.513 8.513 0 0 1-12.06 12.008l-.452-.469L2.47 17.56a.75.75 0 0 0 .015 1.075 11.4 11.4 0 0 0 7.841 3.116c6.31 0 11.424-5.115 11.424-11.424 0-3.035-1.185-5.796-3.116-7.84"
      />
      <path
        fill="currentColor"
        d="m5.067 14.961.459.478a7.013 7.013 0 0 0 9.919-9.906l-.496-.454-1.63 1.63a.75.75 0 0 0-.162.815q.091.22.093.476c0 .488-.28.911-.69 1.118a.75.75 0 0 0-.382.883 1.751 1.751 0 0 1-2.884 1.767.75.75 0 0 0-1.047.013z"
      />
    </svg>
  );
};
export default Watermelon;
