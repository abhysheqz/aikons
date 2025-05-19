import React from "react";
const Shocked: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.3 4.4A5.73 5.73 0 0 1 12 15.25c1.294 0 2.49.428 3.45 1.15a.75.75 0 1 1-.9 1.2 4.23 4.23 0 0 0-2.55-.85c-.958 0-1.84.316-2.55.85a.75.75 0 0 1-.9-1.2m-.8-6.9a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m6.25 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shocked;
