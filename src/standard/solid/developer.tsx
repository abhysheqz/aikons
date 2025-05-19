import React from "react";
const Developer: React.FC<
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
        d="M5.25 16.595a8.75 8.75 0 1 1 14.497-6.827l1.877 2.816a.75.75 0 0 1-.174 1.016l-1.7 1.275v2.992a1.75 1.75 0 0 1-1.967 1.737l-2.033-.254V22a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3.652c.775.412 1.616.71 2.496.874a.75.75 0 0 0 .275-1.475 7.2 7.2 0 0 1-2.771-1.15zm6.985-7.948a.75.75 0 1 0-1.47-.294l-1 5a.75.75 0 0 0 1.47.294zM8.53 10.03a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06L7.56 11zm6-1.06a.75.75 0 1 0-1.06 1.06l.97.97-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Developer;
