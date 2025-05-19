import React from "react";
const LocationShare_02: React.FC<
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
        d="M3.749 6.9a9.03 9.03 0 0 0 0 7.2l-1.833.8c-1.221-2.799-1.221-6 0-8.8zm16.502 7.2a9.03 9.03 0 0 0 0-7.2l1.833-.8c1.221 2.8 1.221 6.001 0 8.8zM12 2.25c-4.307 0-7.75 3.62-7.75 8.023 0 2.531.983 4.511 2.87 6.231 1.214 1.107 3.394 3.46 4.235 4.878a.75.75 0 0 0 1.278.02c.896-1.41 3.046-3.802 4.247-4.898 1.887-1.72 2.87-3.7 2.87-6.231 0-4.404-3.443-8.023-7.75-8.023M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_02;
