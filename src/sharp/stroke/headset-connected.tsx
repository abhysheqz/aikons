import React from "react";
const HeadsetConnected: React.FC<
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
        strokeWidth={1.5}
        d="M17 13v6l2 1c1.672-1.452 2.509-2.178 2.815-2.979A2.7 2.7 0 0 0 22 16a2.7 2.7 0 0 0-.185-1.021c-.306-.8-1.143-1.527-2.815-2.979zM7 13v6l-2 1c-1.673-1.452-2.509-2.178-2.815-2.979A2.7 2.7 0 0 1 2 16a2.7 2.7 0 0 1 .185-1.021C2.491 14.179 3.327 13.452 5 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12v-2a7 7 0 1 0-14 0v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15.115C9.862 14.41 10.89 14 11.996 14c1.109 0 2.14.412 3.004 1.121M13.63 17.5a3.06 3.06 0 0 0-1.634-.482c-.585 0-1.137.172-1.627.477"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20h.006"
      />
    </svg>
  );
};
export default HeadsetConnected;
