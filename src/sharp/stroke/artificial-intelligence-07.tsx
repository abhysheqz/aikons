import React from "react";
const ArtificialIntelligence_07: React.FC<
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
        d="M13 2h-2.953v2.582L8.155 5.694 5.953 4.402 3 9.598l2.202 1.291v2.222L3 14.4l2.953 5.197 2.202-1.292 1.892 1.113V22H13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13 15.5a3.5 3.5 0 0 1 0-7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.25 4.75 18 7h-3m4.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM20.25 19.25 18 17h-3m4.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM20.25 12H15m4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
      />
    </svg>
  );
};
export default ArtificialIntelligence_07;
