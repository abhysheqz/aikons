import React from "react";
const FloorPlan: React.FC<
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
        d="M8.5 1.75h-4A2.75 2.75 0 0 0 1.75 4.5v4H13.5a1 1 0 1 1 0 2h-3v11.75H13v-.75c0-3.41 2.429-5.5 5-5.5a1 1 0 1 1 0 2c-1.429 0-3 1.156-3 3.5v.75h4.5a2.75 2.75 0 0 0 2.75-2.75v-9H17.5a1 1 0 1 1 0-2h4.75v-4a2.75 2.75 0 0 0-2.75-2.75h-9V5.5a1 1 0 1 1-2 0zm0 20.5V10.5H1.75v9a2.75 2.75 0 0 0 2.75 2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FloorPlan;
