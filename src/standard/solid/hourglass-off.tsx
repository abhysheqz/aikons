import React from "react";
const HourglassOff: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 2a1 1 0 0 1 1-1H20a1 1 0 1 1 0 2v2.333c0 2.864-1.634 5.338-4.017 6.651a1 1 0 1 1-.966-1.752C16.82 9.24 18 7.405 18 5.333V3H6.5a1 1 0 0 1-1-1M4.617 4.076a1 1 0 0 1 1.09.217l12.5 12.5a1 1 0 0 1 .293.707V22a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2v-2.333C4 15.787 5.643 13.31 8.05 12 5.642 10.689 4 8.213 4 5.333V5a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HourglassOff;
