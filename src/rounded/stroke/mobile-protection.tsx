import React from "react";
const MobileProtection: React.FC<
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
        d="M18 13.497v1.5c0 3.3 0 4.95-1.025 5.975S14.3 21.997 11 21.997s-4.95 0-5.975-1.025S4 18.297 4 14.997v-6c0-3.3 0-4.95 1.025-5.974.857-.857 2.149-.998 4.475-1.021"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 5.502v-2.5c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5M10 18.998h2"
      />
    </svg>
  );
};
export default MobileProtection;
