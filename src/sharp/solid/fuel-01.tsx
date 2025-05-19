import React from "react";
const Fuel_01: React.FC<
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
        d="M3.25 4.5A.75.75 0 0 1 4 3.75h8a.75.75 0 0 1 .335.08l8 4a.75.75 0 0 1 .415.67V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM12 11.972l.195.187c.231.22.59.562.659.634.198.207.464.497.732.832.266.333.546.724.763 1.132.21.393.401.875.401 1.368 0 1.495-1.277 2.625-2.75 2.625s-2.75-1.13-2.75-2.625c0-.493.19-.975.4-1.368.218-.408.498-.8.764-1.132.268-.335.534-.625.732-.832a49 49 0 0 1 .854-.82m.165-3.301 4 2 .67-1.342-4-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 2A.75.75 0 0 1 6 1.25h3.5a.75.75 0 0 1 .75.75v2.5h-1.5V2.75h-2V4.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fuel_01;
