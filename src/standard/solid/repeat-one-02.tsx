import React from "react";
const RepeatOne_02: React.FC<
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
        d="M22.142 12.01a1 1 0 0 1 .848 1.132C22.434 17.032 19.019 20 15 20H8.262l.878.732a1 1 0 1 1-1.28 1.536l-3-2.5A1 1 0 0 1 5.5 18H15c3.034 0 5.596-2.247 6.01-5.142a1 1 0 0 1 1.132-.848M3.827 16.82a1 1 0 0 1-1.392-.248A8 8 0 0 1 9 4h5.237l-.878-.732a1 1 0 1 1 1.28-1.536l3 2.5A1 1 0 0 1 17 6H9a6 6 0 0 0-4.925 9.428 1 1 0 0 1-.248 1.392M22.472 2.118A1 1 0 0 1 23 3v6a1 1 0 1 1-2 0V4.866a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RepeatOne_02;
