import React from "react";
const Skype: React.FC<
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
        d="M15 10c0-1.105-1.343-2-3-2s-3 .895-3 2c0 3.207 6 .793 6 4 0 1.105-1.343 2-3 2s-3-.895-3-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.378 4.854c-1.917-1.626-4.358-.574-5.137.232-2.068 2.14-1.38 5.211.8 6.373-.717 4.377 4.596 10.965 11.437 7.633 1.05.896 4.12 1.675 5.888-1.02 1.657-2.728-.337-5.01-1.414-5.61.117-8.015-8.121-9.763-11.574-7.608"
      />
    </svg>
  );
};
export default Skype;
