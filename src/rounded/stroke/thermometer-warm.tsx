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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 22a4 4 0 0 0 2.902-6.752c-.506-.535-.76-.802-.83-.98-.072-.179-.072-.415-.072-.886V4a2 2 0 0 0-4 0v9.382c0 .472 0 .707-.071.886-.071.178-.325.445-.831.98A4 4 0 0 0 16.5 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.313 15.83c-1.635-.288-2.95-1.726-3.11-3.57-.19-2.184 1.315-4.111 3.36-4.304q.481-.044.937.037M10.22 4l.103 1.187M6.042 7.576l-.858-.765m-.573 5.694L3.5 12.61m3.368 4.477L6.155 18"
      />
    </svg>
  );
};
export default ThermometerWarm;
