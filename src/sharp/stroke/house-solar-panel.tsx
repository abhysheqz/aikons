import React from "react";
const HouseSolarPanel: React.FC<
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
        d="M4.495 10.037v8.968l2.497.004m12.487-8.972v8.972H16.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12.984 14.024-2.998 3.988h3.997L10.97 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.99 2.061-1 7.976m4.995-7.976.999 7.976M4.495 6.048H19.48"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.014 2h11.948l3.036 8.05a.01.01 0 0 1-.009.014H3.011a.01.01 0 0 1-.01-.014z"
      />
    </svg>
  );
};
export default HouseSolarPanel;
