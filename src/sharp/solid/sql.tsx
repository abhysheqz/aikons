import React from "react";
const Sql: React.FC<
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
        d="M11.75 10.5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4 6a2.25 2.25 0 0 0 0 4.5.75.75 0 1 1-.708 1l-1.414.5a2.25 2.25 0 1 0 2.122-3 .75.75 0 1 1 .708-1l1.414-.5A2.25 2.25 0 0 0 7 8.25m5.5 0a2.25 2.25 0 0 0-2.25 2.25v3a2.25 2.25 0 0 0 1.915 2.225l1.305 1.305 1.06-1.06-.674-.675c.543-.41.894-1.062.894-1.795v-3a2.25 2.25 0 0 0-2.25-2.25m4.75 0h-1.5v7.5h2.75v-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sql;
