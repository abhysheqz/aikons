import React from "react";
const Flag_02: React.FC<
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
        d="M4 14v7M11.758 3.839C8.452 2.129 5.297 3.397 4 4.42v10.405c.97-1.114 3.879-2.84 7.758-.835 3.466 1.792 6.846.808 8.242.033V4.008c-2.69 1.224-5.583 1.206-8.242-.17"
      />
    </svg>
  );
};
export default Flag_02;
