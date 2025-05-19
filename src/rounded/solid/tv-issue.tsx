import React from "react";
const TvIssue: React.FC<
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
        d="M15.293 1.543a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L12 4.836z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.943 5.75h4.113c1.838 0 3.294 0 4.433.149 1.172.153 2.121.476 2.87 1.203.748.727 1.08 1.648 1.238 2.787.153 1.107.153 2.521.153 4.306v.11c0 1.785 0 3.2-.153 4.306-.158 1.139-.49 2.06-1.238 2.787-.749.727-1.698 1.05-2.87 1.203-1.14.15-2.595.149-4.433.149H9.943c-1.837 0-3.293 0-4.432-.149-1.173-.153-2.122-.476-2.87-1.203-.748-.726-1.08-1.648-1.238-2.787-.153-1.107-.153-2.52-.153-4.306v-.11c0-1.785 0-3.2.153-4.306.158-1.139.49-2.06 1.238-2.787s1.697-1.05 2.87-1.203c1.14-.149 2.595-.149 4.432-.149m2.057 10a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m-1 2c0-.552.446-1 .995-1h.01c.55 0 .995.448.995 1s-.446 1-.996 1h-.009a1 1 0 0 1-.995-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TvIssue;
