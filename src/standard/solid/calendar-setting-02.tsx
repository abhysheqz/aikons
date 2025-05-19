import React from "react";
const CalendarSetting_02: React.FC<
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
        d="M8.613 1.25c.538 0 .975.438.975.977v.978h6.825v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v13.682c0 1.62-1.31 2.932-2.925 2.932H6.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.975-.977M20.8 9.75H5.2v10.068c0 .54.436.977.975.977h13.65a.976.976 0 0 0 .975-.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 10.773a1 1 0 0 1 1 1v.671c.347.123.665.308.94.54l.556-.324a1 1 0 1 1 1.008 1.727l-.557.325a3 3 0 0 1 0 1.123l.557.325a1 1 0 1 1-1.008 1.727l-.557-.325a3 3 0 0 1-.939.54v.671a1 1 0 0 1-2 0v-.67a3 3 0 0 1-.94-.54l-.556.324a1 1 0 1 1-1.008-1.727l.557-.325a3 3 0 0 1 0-1.123l-.557-.325a1 1 0 1 1 1.008-1.727l.557.325c.275-.233.592-.418.94-.54v-.672a1 1 0 0 1 1-1m0 3.5a1 1 0 1 0-.002 1.999A1 1 0 0 0 13 14.273"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarSetting_02;
