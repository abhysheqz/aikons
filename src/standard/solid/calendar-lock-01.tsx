import React from "react";
const CalendarLock_01: React.FC<
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
        d="M16.735 14.752a.752.752 0 1 1 1.505 0v.893h-1.505zm-2 .912v-.912a2.752 2.752 0 0 1 5.505 0v.91a1.75 1.75 0 0 1 1.506 1.733v3.604a1.75 1.75 0 0 1-1.75 1.75H15a1.75 1.75 0 0 1-1.75-1.75v-3.604a1.75 1.75 0 0 1 1.485-1.73"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v4.889a.975.975 0 1 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h5.848a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977"
      />
    </svg>
  );
};
export default CalendarLock_01;
