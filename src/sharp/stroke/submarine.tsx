import React from "react";
const Submarine: React.FC<
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
        d="m10.505 11.992 1.5-2.997h3.998l1.499 2.997M14.004 8.995V4h2.999"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.025 18.99 2.01 12a.01.01 0 0 1 .01-.01H4.01l2.497 1.499 2.499-1.499H19c1.966 0 3.117 2.015 2.999 3.497 0 2.348-1.681 3.496-2.999 3.496L9.006 19l-2.5-1.514L4.01 19H2.035a.01.01 0 0 1-.01-.01Z"
      />
    </svg>
  );
};
export default Submarine;
