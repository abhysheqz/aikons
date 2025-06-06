import React from "react";
const TropicalStormTracks_02: React.FC<
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
        d="m12.156 7.231-.868-1.071 2.924-1.91C4.589 2.73 3.155 8.64 3.097 8.904l-.006.026-.009.035a4.86 4.86 0 0 0-.053 2.318c.17.768.522 1.491 1.03 2.109l.867 1.071L2 16.375c9.623 1.529 11.059-4.391 11.118-4.656l.005-.026.01-.035a4.86 4.86 0 0 0 .052-2.318 5.04 5.04 0 0 0-1.029-2.109Z"
      />
      <circle
        cx={8.106}
        cy={10.312}
        r={2.231}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 7v5.5A7.5 7.5 0 0 1 12 20m7.5-13c.7 0 2.009 1.994 2.5 2.5M19.5 7c-.7 0-2.009 1.994-2.5 2.5"
      />
    </svg>
  );
};
export default TropicalStormTracks_02;
