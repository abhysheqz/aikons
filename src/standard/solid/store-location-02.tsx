import React from "react";
const StoreLocation_02: React.FC<
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
        d="M3.25 3c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v1.3l1.901 3.328A.75.75 0 0 1 22.75 8a3.75 3.75 0 0 1-6.813 2.165 4 4 0 0 1-.828.713c-.91.593-2.059.872-3.109.872s-2.199-.279-3.109-.872a4 4 0 0 1-.828-.713A3.75 3.75 0 0 1 1.25 8a.75.75 0 0 1 .099-.372L3.25 4.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 19v-8.5h2V19a1 1 0 0 0 1 1H13a1 1 0 1 1 0 2H5.5a3 3 0 0 1-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 17.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M18.5 12.75c-2.334 0-4.25 1.86-4.25 4.184 0 1.306.626 2.365 1.364 3.242.484.575 1.084 1.14 1.633 1.66.258.243.504.476.723.694a.75.75 0 0 0 1.06 0c.225-.224.481-.465.75-.716.541-.508 1.131-1.061 1.604-1.62.742-.874 1.366-1.934 1.366-3.26 0-2.324-1.916-4.184-4.25-4.184m0 5.75a1.5 1.5 0 0 1 0-3h.009a1.5 1.5 0 0 1 0 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreLocation_02;
