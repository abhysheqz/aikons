import React from "react";
const DeviceAccess: React.FC<
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
        d="M5 1.25A2.75 2.75 0 0 0 2.25 4v16A2.75 2.75 0 0 0 5 22.75h7.563A3 3 0 0 1 12 21v-3.5c0-1.111.604-2.08 1.501-2.599a4 4 0 0 1 4.249-3.893V4A2.75 2.75 0 0 0 15 1.25zM9.5 18c.552 0 1 .445 1 .995v.01c0 .55-.448.995-1 .995s-1-.445-1-.995v-.01c0-.55.448-.995 1-.995m5.25-3a2.75 2.75 0 1 1 5.5 0v.768c.848.121 1.5.85 1.5 1.732V21A1.75 1.75 0 0 1 20 22.75h-5A1.75 1.75 0 0 1 13.25 21v-3.5a1.75 1.75 0 0 1 1.5-1.732zm4 .75V15a1.25 1.25 0 1 0-2.5 0v.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeviceAccess;
