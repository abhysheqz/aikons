import React from "react";
const SmartPhone_03: React.FC<
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
        d="M19.25 1.25H4.75V6.5h1.933V3.203H9.47l.484.977h4.095l.483-.977h2.786V6.5h1.933zM4.75 22.75h14.5V17.5h-1.933V19H6.683v-1.5H4.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.664 16.414 7.578 13.5l-1.5-1.5 1.5-1.5-2.914-2.914L3.25 9l1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5zM19.336 16.414 16.422 13.5l1.5-1.5-1.5-1.5 2.914-2.914L20.75 9l-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhone_03;
