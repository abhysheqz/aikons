import React from "react";
const ResourcesRemove: React.FC<
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
        d="M9.5 2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M21 13.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M10.677 18.279c.43-.43.43-1.128 0-1.558L7.28 13.323a1.1 1.1 0 0 0-1.558 0L2.323 16.72c-.43.43-.43 1.128 0 1.558l3.398 3.398c.43.43 1.128.43 1.558 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResourcesRemove;
