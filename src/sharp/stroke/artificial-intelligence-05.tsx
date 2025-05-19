import React from "react";
const ArtificialIntelligence_05: React.FC<
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
        d="m22 9.11-2.468 1.92a8 8 0 0 1 0 1.94L22 14.89l-2.458 4.22-2.904-1.16c-.526.4-1.082.73-1.71.99L14.464 22H9.537l-.445-3.07a7.7 7.7 0 0 1-1.72-1l-2.904 1.18L2 14.89l2.468-1.92a8 8 0 0 1 0-1.94L2 9.11l2.468-4.22 2.904 1.18c.526-.4 1.092-.74 1.72-1L9.537 2h4.926l.466 3.06c.627.26 1.183.59 1.71.99l2.903-1.16z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m8.18 13.205 1.853-4.666 1.86 4.666m-3.712 0L7.19 15.7m.99-2.495h3.712m0 0 .994 2.495M15.5 8.26v7.565"
      />
    </svg>
  );
};
export default ArtificialIntelligence_05;
