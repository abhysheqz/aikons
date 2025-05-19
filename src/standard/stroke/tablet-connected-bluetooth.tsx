import React from "react";
const TabletConnectedBluetooth: React.FC<
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
        d="M21.5 4.5c-.222-.863-1.068-1.5-2-1.5h-15a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15c.932 0 1.778-.637 2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3v18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.5 15 7-6L18 7v10l3.5-2-7-6"
      />
    </svg>
  );
};
export default TabletConnectedBluetooth;
