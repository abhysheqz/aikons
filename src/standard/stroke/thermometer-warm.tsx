import React from "react";
const ThermometerWarm: React.FC<
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
        strokeWidth={1.5}
        d="M10.313 15.83c-1.635-.288-2.95-1.726-3.11-3.57-.19-2.184 1.315-4.111 3.36-4.304q.481-.044.937.037M10 4l.5 1M6 7.5 5 7m-.5 5.5h-1M7 17l-1 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 22a4 4 0 0 0 2-7.465V4a2 2 0 1 0-4 0v10.535a4 4 0 0 0 2 7.465Z"
      />
    </svg>
  );
};
export default ThermometerWarm;
