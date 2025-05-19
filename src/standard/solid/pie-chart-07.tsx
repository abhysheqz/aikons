import React from "react";
const PieChart_07: React.FC<
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
        d="M11.248 1.25a10.78 10.78 0 0 0-9.998 9.998h5.035a5.77 5.77 0 0 1 4.963-4.963zM12.752 6.285a5.77 5.77 0 0 1 4.963 4.963h5.035a10.78 10.78 0 0 0-9.998-9.998zM22.75 12.752h-5.035a5.77 5.77 0 0 1-4.963 4.963v5.035a10.78 10.78 0 0 0 9.998-9.998M11.248 22.75v-5.035a5.77 5.77 0 0 1-4.963-4.963H1.25a10.78 10.78 0 0 0 9.998 9.998"
      />
    </svg>
  );
};
export default PieChart_07;
