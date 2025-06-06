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
        d="m9.5 12.5 1.834 3.302c.394.709.27 1.593-.303 2.167v0a1.82 1.82 0 0 1-2.26.248L4.5 15.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4.439c-5.349-1.602-8.88 1.412-10.93 5.274C8.666 14.243 5.85 15.313 2 16"
      />
      <path
        fill="currentColor"
        d="M5 19.25a.75.75 0 0 0 0 1.5zm3.67-.915a.75.75 0 1 0-1.34-.67zM21 10.75a.75.75 0 0 0 0-1.5zm-16 10c1.27 0 2.199-.638 2.78-1.22a5.3 5.3 0 0 0 .87-1.155l.018-.034.002-.003v-.002L8 18l-.67-.336v-.002l-.003.008-.025.044a3.81 3.81 0 0 1-.582.756c-.419.418-.99.78-1.72.78zm6.327-5.023c1.041-1.475 2.111-2.7 3.57-3.567 1.45-.863 3.35-1.41 6.103-1.41v-1.5c-2.961 0-5.14.591-6.87 1.62-1.724 1.026-2.94 2.448-4.028 3.992z"
      />
    </svg>
  );
};
export default HairClips;
