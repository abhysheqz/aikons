import React from "react";
const EquipmentBenchPress: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 3v6m-11-6v6M20 4v2m0 0v2m0-2h2M4 4v2m0 0v2m0-2H2M17.5 6h-11M10 6v4m4-4v4M18.431 16H5.45M15.5 10h-7L5 16v3h14v-3zM16 19v2m-8-2v2"
      />
    </svg>
  );
};
export default EquipmentBenchPress;
