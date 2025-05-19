import React from "react";
const AnalyticsDown: React.FC<
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15A2.75 2.75 0 0 1 2 19.75zm5.25 7.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m5 2a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m5 1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M6.836 5.782a.75.75 0 1 0-1.172.937c2.17 2.712 5.392 3.76 7.975 4.148.663.1 1.292.156 1.861.186v1.197a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.28.53v1.301a18 18 0 0 1-1.639-.168c-2.416-.362-5.196-1.314-7.025-3.601"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalyticsDown;
