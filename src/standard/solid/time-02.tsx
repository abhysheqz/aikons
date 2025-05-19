import React from "react";
const Time_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.008 5.749a1 1 0 1 0-2 0v2.717a2.5 2.5 0 0 0 1.91 4.621l1.39 1.39a1 1 0 0 0 1.414-1.414l-1.388-1.388a2.5 2.5 0 0 0-1.327-3.209z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_02;
