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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-2.5 9.5a2.5 2.5 0 1 1 3.5 2.292v2.708a1 1 0 1 1-2 0v-2.708a2.5 2.5 0 0 1-1.5-2.292"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lock;
