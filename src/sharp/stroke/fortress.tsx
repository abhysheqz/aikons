import React from "react";
const Fortress: React.FC<
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
        d="M1 20.981h8v-2.997a3 3 0 0 1 3-2.997c1.657 0 3 1.342 3 2.997v2.997h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8.993h-2M13 12h-2M18.5 9h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.02 20.993V3.01a.01.01 0 0 1 .01-.01h1.977L5.501 5h2.012l.491-1.998h1.99a.01.01 0 0 1 .01.01v5.962q.001.009.01.01h4.011a.01.01 0 0 0 .01-.01l-.052-5.961a.01.01 0 0 1 .01-.01h2.01l.497 1.981h2.001l.496-1.976h1.986a.01.01 0 0 1 .01.01v17.982"
      />
    </svg>
  );
};
export default Fortress;
