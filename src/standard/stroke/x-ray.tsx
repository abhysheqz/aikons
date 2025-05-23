import React from "react";
const XRay: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 22h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2M12 5v9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14.332c-.953 0-1.857-.105-2.671-.294-.875-.203-1.829.437-1.829 1.367 0 .485.266.935.707 1.099q.486.181 1.036.314c.592.143 1.112.53 1.37 1.1l.106.236c.232.516.732.846 1.281.846.55 0 1.049-.33 1.281-.846l.107-.236c.257-.57.777-.957 1.37-1.1a9 9 0 0 0 1.035-.314c.44-.164.707-.614.707-1.1 0-.929-.954-1.57-1.829-1.366-.813.189-1.718.294-2.671.294M15 7c-.387.619-.916 1-1.5 1s-1.113-.381-1.5-1c-.387.619-.916 1-1.5 1S9.387 7.619 9 7M7 10c.644.619 1.527 1 2.5 1s1.856-.381 2.5-1c.644.619 1.527 1 2.5 1s1.856-.381 2.5-1"
      />
    </svg>
  );
};
export default XRay;
