import React from "react";
const CalendarUser: React.FC<
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
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v5.889a.975.975 0 1 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h5.348a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977"
      />
      <path
        fill="currentColor"
        d="M17.5 13.75a2.5 2.5 0 0 0-1.685 4.347A4.25 4.25 0 0 0 13.25 22c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75 4.25 4.25 0 0 0-2.565-3.903A2.5 2.5 0 0 0 17.5 13.75"
      />
    </svg>
  );
};
export default CalendarUser;
