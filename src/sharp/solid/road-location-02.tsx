import React from "react";
const RoadLocation_02: React.FC<
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
        d="M11.992 1.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.52.615 2.707 1.753 3.716.686.608 1.902 1.89 2.357 2.634a.75.75 0 0 0 1.268.02c.491-.75 1.697-2.058 2.37-2.654 1.138-1.009 1.752-2.197 1.752-3.716 0-2.638-2.12-4.79-4.75-4.79m-.008 3.082c-.962 0-1.742.783-1.742 1.75 0 .966.78 1.75 1.742 1.75H12c.962 0 1.742-.784 1.742-1.75 0-.967-.78-1.75-1.742-1.75zM4.992 14h3v2h-3zm5.5 0h3v2h-3zm5.5 0h3v2h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 8.219c0-.535.438-.969.977-.969h3.91v1.938H3.204v11.625h17.59V9.188h-2.931V7.25h3.909c.54 0 .977.434.977.969V21.78a.973.973 0 0 1-.977.969H2.227a.98.98 0 0 1-.69-.284.97.97 0 0 1-.287-.685z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RoadLocation_02;
