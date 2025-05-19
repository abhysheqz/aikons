import React from "react";
const InstallingUpdates_01: React.FC<
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
        d="M15 10.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 2H9.48v2.194l-1.608.946L6 4.042 3.49 8.458l1.871 1.098v1.888l-1.87 1.098L6 16.958l1.872-1.097 1.608.945V19h5.02v-2.194l1.609-.946 1.871 1.098 2.51-4.416-1.871-1.098V9.556l1.871-1.098-2.51-4.416L16.11 5.14l-1.61-.946z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 18v4H2v-4"
      />
    </svg>
  );
};
export default InstallingUpdates_01;
