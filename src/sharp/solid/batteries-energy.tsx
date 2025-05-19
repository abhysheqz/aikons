import React from "react";
const BatteriesEnergy: React.FC<
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
        d="m13.533 2.044-2.18 3.489h4l-3.615 5.783-1.272-.795 2.18-3.488h-4l3.615-5.784zM4.249 5.25h3v1.5h-1.5v4.5h-1.5zm12.5 0h3v6h-1.5v-4.5h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 12.25a.75.75 0 0 0-.75.75v1.75h7.5V13a.75.75 0 0 0-.75-.75zM22.75 16.25h-7.5v2.5h7.5zM22.75 20.25h-7.5V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75zM2 12.25a.75.75 0 0 0-.75.75v1.75h7.5V13a.75.75 0 0 0-.75-.75zM8.75 16.25h-7.5v2.5h7.5zM8.75 20.25h-7.5V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default BatteriesEnergy;
