import React from "react";
const Feather: React.FC<
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
        d="M13.103 3.44a4.92 4.92 0 0 1 6.958 6.958l-5.895 5.984a3.75 3.75 0 0 1-2.672 1.118H7.061l5-5h2.189a.75.75 0 0 0 0-1.5h-.69l1.72-1.72a.75.75 0 0 0-1.06-1.06L6 16.44v-4.434a3.75 3.75 0 0 1 1.118-2.672zM2.22 20.22 6 16.44v.31c0 .414.336.75.75.75h.31l-3.78 3.78a.75.75 0 0 1-1.06-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Feather;
