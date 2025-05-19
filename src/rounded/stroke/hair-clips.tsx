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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.349 12.332c-1 2.054 3.207 3.699 1.649 5.668-1.506 1.388-3.152-2.38-6.498-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4.439c-5.349-1.602-8.88 1.412-10.93 5.274C8.666 14.243 5.85 15.313 2 16M5 20c2 0 3-2 3-2m2.714-2.706C12.844 12.276 15.286 10 21 10"
      />
    </svg>
  );
};
export default HairClips;
