import React from "react";
const TwoFinger_01: React.FC<
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
        d="M8.256 3.989v9.644a.42.42 0 0 1-.269.389.44.44 0 0 1-.47-.098L5.714 12.11a1.43 1.43 0 0 0-2.143.12c-.203.256-.31.564-.321.875q.006.229.054.453c.048.17.127.334.236.482L7.22 19.1c.234.31.436.715.588 1.172l.01.03c.168.503.307.922.439 1.237.123.295.298.653.614.88.292.21.623.276.915.304.282.027.631.027 1.027.027h6.113c.12 0 .245 0 .359-.015a1.75 1.75 0 0 0 1.51-1.51c.014-.114.014-.27.014-.39 0-.334.132-.673.37-.953.387-.456.964-1.188 1.202-1.83.197-.53.284-1.1.326-1.786.042-.675.042-1.509.042-2.574v-1.498c0-1.09-.789-2.096-1.798-2.544-.271-.12-.407-.18-.543-.092-.136.089-.136.258-.136.596V12a.425.425 0 0 1-.43.419.425.425 0 0 1-.431-.42V9.494a.01.01 0 0 0-.009-.006.01.01 0 0 1-.008-.003c-.379-.586-1.108-1.01-1.865-1.16-.251-.05-.377-.075-.486.015-.11.09-.11.235-.11.525v2.019a.425.425 0 0 1-.43.419.425.425 0 0 1-.43-.419V2.489a1.239 1.239 0 0 0-2.478 0v7.277a.425.425 0 0 1-.43.419.425.425 0 0 1-.43-.419V3.99a1.239 1.239 0 0 0-2.479 0"
      />
    </svg>
  );
};
export default TwoFinger_01;
