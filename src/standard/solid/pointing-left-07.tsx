import React from "react";
const PointingLeft_07: React.FC<
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
        d="M14.184 9.893H3.043a1.296 1.296 0 1 0 0 2.593h8.44a.45.45 0 0 1 0 .9H8.292s-.033.22-.044.363c-.024.292 0 .75 0 .75 0 .526.18 1.01.482 1.393h3.622a.45.45 0 0 1 0 .9H9.248v.707c0 .735.352 1.388.897 1.798h2.853a.45.45 0 0 1 0 .9h-2.75v.302a2.25 2.25 0 0 0 2.25 2.25h6a3.75 3.75 0 0 0 3.75-3.75v-7.905a2.75 2.75 0 0 0-1.27-2.318l-7.056-4.504a1.547 1.547 0 0 0-1.915 2.41l2.493 2.44a.45.45 0 0 1-.316.77"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.383 1.076A1 1 0 0 1 6 2v1.5h2.5a1 1 0 1 1 0 2H6V7a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_07;
