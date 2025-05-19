import React from "react";
const RoadLocation_01: React.FC<
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
        d="M18.5 15h-2M13 15h-2m-3.5 0h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 6.05c0 2.534-2.588 4.194-3.6 4.747a.83.83 0 0 1-.8 0C10.589 10.244 8 8.584 8 6.05 8 3.813 9.79 2 12 2s4 1.813 4 4.05Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"
      />
    </svg>
  );
};
export default RoadLocation_01;
