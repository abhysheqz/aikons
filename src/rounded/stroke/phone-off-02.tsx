import React from "react";
const PhoneOff_02: React.FC<
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
        d="m2 2 20 20M18.5 14.5V7c0-2.357 0-3.536-.732-4.268C17.035 2 15.857 2 13.5 2l-3.006.008c-2.084 0-3.246 0-3.994.506M5.5 6v11c0 2.357 0 3.535.732 4.268S8.143 22 10.5 22H15c.93 0 1.396 0 1.773-.122a2.5 2.5 0 0 0 1.605-1.605c.122-.377.122-.842.122-1.773"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19h.01"
      />
    </svg>
  );
};
export default PhoneOff_02;
