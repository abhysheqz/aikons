import React from "react";
const BodySoap: React.FC<
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
        d="M15.251 13a5.75 5.75 0 0 0-3-5.051V4.25h-5.5v3.699a5.75 5.75 0 0 0-3 5.051v9c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75zm-10 0a4.25 4.25 0 0 1 8.5 0v1.25h-8.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.751 2.75h-2.25v-1.5h7.5a.75.75 0 0 1 .53.22l1.5 1.5-1.06 1.06-1.28-1.28h-3.44V5h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.576 7.793c.23.254.488.595.592.99.32 1.215-.314 2.55-1.567 2.892-1.26.343-2.472-.497-2.793-1.716-.104-.395-.049-.82.027-1.155a7 7 0 0 1 .333-1.03c.128-.314.262-.597.364-.8.05-.102.554-1.012.554-1.012s.89.536.984.598c.188.125.444.301.71.51.263.205.55.454.796.723"
      />
    </svg>
  );
};
export default BodySoap;
