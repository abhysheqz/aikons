import React from "react";
const CalendarSetting_01: React.FC<
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
        d="M17.25 12.75a1 1 0 0 1 1 1v.645c.538.16 1.02.446 1.416.823l.588-.336a1 1 0 0 1 .992 1.736l-.587.336a3.5 3.5 0 0 1 0 1.592l.587.336a1 1 0 0 1-.992 1.736l-.588-.336a3.5 3.5 0 0 1-1.416.823v.645a1 1 0 1 1-2 0v-.645a3.5 3.5 0 0 1-1.416-.823l-.588.336a1 1 0 0 1-.992-1.736l.587-.336a3.5 3.5 0 0 1 0-1.592l-.587-.336a1 1 0 0 1 .992-1.736l.588.336a3.5 3.5 0 0 1 1.416-.823v-.645a1 1 0 0 1 1-1m0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v5.889a.975.975 0 1 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h5.848a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977"
      />
    </svg>
  );
};
export default CalendarSetting_01;
