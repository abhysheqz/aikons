import React from "react";
const Package_02: React.FC<
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
        d="M6.5 1.75h2.947l-1.075 4H2.143q.072-.12.157-.233l2-2.667a2.75 2.75 0 0 1 2.2-1.1m1.75 8.75V7.25h-6.5V19.5a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75V7.25h-6.5v3.25a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25m7.378-4.75-1.075-4H17.5c.866 0 1.68.408 2.2 1.1l2 2.667q.085.113.157.233zM10.5 15.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M13 1.75h-2L9.772 6.318a.8.8 0 0 0-.022.182v4c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-4a.8.8 0 0 0-.022-.182z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package_02;
