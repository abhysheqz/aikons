import React from "react";
const StoreRemove_02: React.FC<
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
        d="M5.5 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M3.25 3.5c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v1.3l1.901 3.328a.75.75 0 0 1 .099.372 3.75 3.75 0 0 1-6.813 2.165 4 4 0 0 1-.828.713c-.91.593-2.059.872-3.109.872s-2.199-.279-3.109-.872a4 4 0 0 1-.828-.713A3.75 3.75 0 0 1 1.25 8.5a.75.75 0 0 1 .099-.372L3.25 4.8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 10.5a1 1 0 0 1 1 1v8a1 1 0 0 0 1 1H13a1 1 0 1 1 0 2H5.5a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1V13a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1M15.293 15.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L19.914 18.5l1.793 1.793a1 1 0 0 1-1.414 1.414L18.5 19.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StoreRemove_02;
