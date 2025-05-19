import React from "react";
const HeadsetOff: React.FC<
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
        d="m2 2 20 20M21 14a4 4 0 0 0-4-4h-2v1.818M21 14c0 1.058-.411 2.02-1.082 2.736M21 14v-3A9 9 0 0 0 6.82 3.639M3 14a4 4 0 0 0 4 4h2v-8H7a4 4 0 0 0-4 4Zm0 0v-3c0-2.23.812-4.272 2.156-5.844M18.5 22H12"
      />
    </svg>
  );
};
export default HeadsetOff;
