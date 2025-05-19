import React from "react";
const AugmentedRealityAr: React.FC<
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
        strokeWidth={1.5}
        d="M13 3h-2C6.757 3 4.636 3 3.318 4.318S2 7.758 2 12s0 6.364 1.318 7.682S6.758 21 11 21h2c4.243 0 6.364 0 7.682-1.318S22 16.242 22 12s0-6.364-1.318-7.682S17.242 3 13 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 14 1.755-3.912C8.08 9.363 8.242 9 8.5 9s.42.363.745 1.088L11 14m3 0v-2m0 0v-1.8c0-.566 0-.849.176-1.024C14.35 9 14.634 9 15.2 9h1.3a1.5 1.5 0 0 1 0 3M14 12h2.5m0 0 1 2"
      />
    </svg>
  );
};
export default AugmentedRealityAr;
