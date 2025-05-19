import React from "react";
const HairClips: React.FC<
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
        strokeWidth={1.5}
        d="M9.5 12.5 12 17l-2 2-5.5-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4.439c-5.349-1.602-8.88 1.412-10.93 5.274C8.666 14.243 5.85 15.313 2 16M5 20c2 0 3.5-2.5 3.5-2.5m2.214-2.206C12.844 12.276 15.286 10 21 10"
      />
    </svg>
  );
};
export default HairClips;
