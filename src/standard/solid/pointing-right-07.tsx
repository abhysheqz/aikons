import React from "react";
const PointingRight_07: React.FC<
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
        d="M18.617 1.076a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18 7V5.5h-2.5a1 1 0 1 1 0-2H18V2a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.81 9.893H20.95a1.296 1.296 0 1 1 0 2.593h-8.44a.45.45 0 1 0 0 .9h3.19s.033.22.045.363c.024.292 0 .75 0 .75 0 .526-.18 1.01-.482 1.393h-3.622a.45.45 0 0 0 0 .9h3.104v.707c0 .735-.352 1.388-.897 1.798h-2.853a.45.45 0 0 0 0 .9h2.75v.302a2.25 2.25 0 0 1-2.25 2.25h-6A3.75 3.75 0 0 1 1.746 19v-7.905a2.75 2.75 0 0 1 1.27-2.318l7.056-4.504a1.547 1.547 0 0 1 1.915 2.41l-2.493 2.44a.45.45 0 0 0 .316.77"
      />
    </svg>
  );
};
export default PointingRight_07;
