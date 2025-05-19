import React from "react";
const Time_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.508 5.249a1 1 0 1 0-2 0v2.717a2.5 2.5 0 0 0 1.91 4.621l1.39 1.39a1 1 0 0 0 1.414-1.414l-1.388-1.388a2.5 2.5 0 0 0-1.327-3.209z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_01;
