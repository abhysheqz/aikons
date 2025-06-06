import React from "react";
const PoliceBadge: React.FC<
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
        d="M12 22c-1-2-9-2-9-8 0-3 3-5 .5-9 .833-1 3.7-3 8.5-3s7.667 2 8.5 3c-2.5 4 .5 6 .5 9 0 6-7.5 6-9 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.621 7.242a.417.417 0 0 1 .758 0l.93 1.906a.43.43 0 0 0 .311.237l2.021.336c.343.057.48.496.235.752l-1.447 1.515a.46.46 0 0 0-.12.383l.32 2.115c.054.358-.304.63-.613.465l-1.823-.97a.41.41 0 0 0-.386 0l-1.823.97c-.31.164-.667-.107-.613-.465l.32-2.115a.46.46 0 0 0-.12-.383l-1.446-1.515c-.245-.256-.109-.695.234-.752l2.02-.336a.43.43 0 0 0 .313-.237z"
      />
    </svg>
  );
};
export default PoliceBadge;
