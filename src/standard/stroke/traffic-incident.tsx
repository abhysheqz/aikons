import React from "react";
const TrafficIncident: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.455 14.727 4 13.273m1.455 1.454-.748.748a1 1 0 0 0 0 1.414L6.91 19.09m-1.454-4.364 7.272-7.272m0 0L11.273 6m1.454 1.455.748-.748a1 1 0 0 1 1.414 0L17.09 8.91M9.818 19.82l3.075 1.536a2 2 0 0 0 2.308-.374l3.78-3.78a2 2 0 0 0 .374-2.309l-1.537-3.074m-8 8 8-8m-8 8-2.909-.727m2.91.727L9.09 22m8.727-10.182-.727-2.909m.727 2.91L20 11.09m-13.09 8 1.454-1.455M17.09 8.91l-1.455 1.455m-3.272 1.09-2.91 2.91M3 2h18"
      />
    </svg>
  );
};
export default TrafficIncident;
