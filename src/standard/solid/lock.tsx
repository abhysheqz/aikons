import React from "react";
const Lock: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12 8a3 3 0 0 0-1 5.83v2.67a1 1 0 1 0 2 0v-2.67A3.001 3.001 0 0 0 12 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lock;
