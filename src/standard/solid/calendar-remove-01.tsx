import React from "react";
const CalendarRemove_01: React.FC<
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
        d="M14.043 15.043a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.612 1.25c.539 0 .975.438.975.977v.978h6.825v-.978a.976.976 0 1 1 1.95 0v.978h1.463a2.93 2.93 0 0 1 2.925 2.931v5.889a.975.975 0 0 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h5.848a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.462v-.978c0-.54.437-.977.975-.977"
      />
    </svg>
  );
};
export default CalendarRemove_01;
