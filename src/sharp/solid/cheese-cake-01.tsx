import React from "react";
const CheeseCake_01: React.FC<
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
        d="M15.51 6.253a3.26 3.26 0 0 0-1.77-1.778 3.2 3.2 0 0 1 1.442-.768l-.364-1.457c-1.505.377-2.396 1.295-2.81 2.017a3.253 3.253 0 0 0-2.453 4.594l-7.856 3.441A.751.751 0 0 0 2 13.741h10.25v1.752a2.251 2.251 0 1 0 4.5 0v-1.752H22a.75.75 0 0 0 .651-1.123l-4-7.009a.75.75 0 0 0-.952-.315zm.225 1.54a3.252 3.252 0 0 1-5.204 2.28l-4.946 2.166H13a.75.75 0 0 1 .75.751v2.503a.75.75 0 1 0 1.5 0V12.99a.75.75 0 0 1 .75-.75h4.708l-3.025-5.3zm-1.485-.31a1.751 1.751 0 1 0-3.502-.001 1.751 1.751 0 0 0 3.502.002"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.74 4.475c.802.332 1.441.975 1.77 1.778l2.19-.959a.75.75 0 0 1 .951.315l4 7.009A.75.75 0 0 1 22 13.74h-5.25v1.752a2.251 2.251 0 1 1-4.5 0v-1.752H2a.75.75 0 0 1-.3-1.439l7.855-3.44a3.253 3.253 0 0 1 2.453-4.594c.414-.723 1.305-1.641 2.81-2.018l.364 1.457c-.66.165-1.127.47-1.441.768M12.5 5.732a1.751 1.751 0 1 1-.002 3.502 1.751 1.751 0 0 1 .002-3.502"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12.99a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm1.5 4.756v2.502h18.5v-2.503H18v-1.501h3.25V13.74H2.75v2.503H11v1.502z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheeseCake_01;
