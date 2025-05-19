import React from "react";
const AnalyticsUp: React.FC<
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15A2.75 2.75 0 0 1 2 19.75zm15.25 7.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m-5 1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m8-10a.75.75 0 0 0-.53 1.28l.96.961c-.414.357-.91.75-1.48 1.141-1.922 1.321-4.65 2.618-7.95 2.618a.75.75 0 0 0 0 1.5c3.7 0 6.722-1.453 8.8-2.882a19 19 0 0 0 1.694-1.313l.976.975A.75.75 0 0 0 19 9.25v-3a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalyticsUp;
