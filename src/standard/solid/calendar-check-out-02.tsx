import React from "react";
const CalendarCheckOut_02: React.FC<
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
        d="M12.793 12.066a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414l.793-.793H9a1 1 0 1 1 0-2h4.586l-.793-.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v13.682c0 1.62-1.31 2.932-2.925 2.932H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977M19.8 9.75H4.2v10.068c0 .54.436.977.975.977h13.65a.976.976 0 0 0 .975-.977z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarCheckOut_02;
