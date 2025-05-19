import React from "react";
const Noodles: React.FC<
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
        d="M17.953 11.998c0-1.381-1.115-2.5-2.49-2.5a2.495 2.495 0 0 0-2.488 2.5M6.005 2.998v8.999m2.489-9.499v5m2.49-5.5v5.5M4.014 4.498l1.991-.313m13.939-2.187-6.472 1.016M4.014 6.997l1.991-.125m13.939-.874-6.472.406"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 12.008h18c-.062 4.48-3.664 6.582-5.045 7.155l.965 2.66c.024.065.07.177 0 .177H7.117c-.07 0-.123.015-.099-.05l.98-2.78C6.616 18.597 3.061 16.487 3 12.008Z"
      />
    </svg>
  );
};
export default Noodles;
