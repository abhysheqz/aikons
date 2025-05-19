import React from "react";
const JusticeScale_01: React.FC<
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
        d="M12 4a1 1 0 0 1 1 1v16h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H11V5a1 1 0 0 1 1-1M18.5 7.25a.75.75 0 0 1 .67.415l2.5 5a.75.75 0 1 1-1.34.67L18.5 9.677l-1.83 3.658a.75.75 0 1 1-1.34-.67l2.5-5a.75.75 0 0 1 .67-.415M5.5 7.25a.75.75 0 0 1 .67.415l2.5 5a.75.75 0 1 1-1.34.67L5.5 9.677l-1.83 3.658a.75.75 0 1 1-1.34-.67l2.5-5a.75.75 0 0 1 .67-.415"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.775 7.213c-1.643-1.617-3.907-1.617-5.55 0C8.073 8.348 6.6 9 5.049 9H3.5a1 1 0 0 1 0-2h1.548c.975 0 1.955-.407 2.775-1.213 2.421-2.383 5.933-2.383 8.354 0 .82.806 1.8 1.213 2.775 1.213H20.5a1 1 0 1 1 0 2h-1.548c-1.552 0-3.024-.652-4.178-1.787"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M1.25 13a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75 4.25 4.25 0 0 1-8.5 0M14.25 13a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default JusticeScale_01;
