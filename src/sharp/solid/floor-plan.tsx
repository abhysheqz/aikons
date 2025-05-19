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
        d="M8.5 6.5h2V1.75h11.75V8.5H16.5v2h5.75v11.75H15v-.75c0-2.344 1.571-3.5 3-3.5h1v-2h-1c-2.571 0-5 2.09-5 5.5v.75h-2.5V10.5h4v-2H1.75V1.75H8.5z"
      />
      <path fill="currentColor" d="M1.75 10.5v11.75H8.5V10.5z" />
    </svg>
  );
};
export default FloorPlan;
