import React from "react";
const Translation: React.FC<
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
        d="M5 6.466h3.15m3.85 0h-1.75m-2.1 0h2.1m-2.1 0V4.5m2.1 1.966c-.37 1.32-1.142 2.568-2.025 3.665M5.975 12.5c.713-.656 1.52-1.46 2.25-2.369m0 0c-.45-.528-1.08-1.381-1.26-1.767m1.26 1.767 1.35 1.403"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7h5v15H7v-5M17 7V2H2v15h5M17 7 7 17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13 19 .833-2.5M18 19l-.833-2.5m-3.334 0L15 13h1l1.167 3.5m-3.334 0h3.334"
      />
    </svg>
  );
};
export default Translation;
