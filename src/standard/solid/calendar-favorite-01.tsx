import React from "react";
const CalendarFavorite_01: React.FC<
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
        d="M17.25 14.25a.75.75 0 0 1 .677.427l.948 1.99 2.186.178a.75.75 0 0 1 .46 1.287l-1.578 1.527.452 2.19a.75.75 0 0 1-1.09.812l-2.055-1.106-2.056 1.106a.75.75 0 0 1-1.09-.813l.453-2.188-1.579-1.529a.75.75 0 0 1 .46-1.286l2.187-.179.948-1.989a.75.75 0 0 1 .677-.427"
      />
      <path
        fill="currentColor"
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v6.889a.975.975 0 1 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h5.848a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977"
      />
    </svg>
  );
};
export default CalendarFavorite_01;
