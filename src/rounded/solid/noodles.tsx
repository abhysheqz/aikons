import React from "react";
const Noodles: React.FC<
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
        d="M15.5 8.55A3.45 3.45 0 0 0 12.05 12a.95.95 0 1 0 1.9 0 1.55 1.55 0 1 1 3.1 0 .95.95 0 1 0 1.9 0 3.45 3.45 0 0 0-3.45-3.45M11 1.05a.95.95 0 0 0-.95.95v5.5a.95.95 0 1 0 1.9 0V2a.95.95 0 0 0-.95-.95M8.5 1.55a.95.95 0 0 0-.95.95v5a.95.95 0 0 0 1.9 0v-5a.95.95 0 0 0-.95-.95M6 2.05a.95.95 0 0 0-.95.95v9a.95.95 0 1 0 1.9 0V3A.95.95 0 0 0 6 2.05M20.94 1.854a.95.95 0 0 0-1.086-.792l-6.5 1.016a.95.95 0 1 0 .294 1.877l6.5-1.015a.95.95 0 0 0 .791-1.086"
      />
      <path
        fill="currentColor"
        d="M6.94 4.042a.95.95 0 0 0-1.086-.792l-2 .312a.95.95 0 1 0 .294 1.878l2-.313a.95.95 0 0 0 .792-1.085M20.95 5.942a.95.95 0 0 0-1.008-.89l-6.5.407a.95.95 0 1 0 .118 1.896l6.5-.406a.95.95 0 0 0 .89-1.007M6.95 6.817a.95.95 0 0 0-1.008-.89l-2 .126a.95.95 0 1 0 .118 1.896l2-.125a.95.95 0 0 0 .89-1.007M3.739 11.35a5.6 5.6 0 0 1 1.172-.1h14.177a5.6 5.6 0 0 1 1.173.1c.351.077.714.22 1.001.504.61.603.55 1.482.344 2.309-.396 1.596-1.167 2.604-2.062 3.44-.372.347-.773.67-1.16.983-.422.343-1.027.842-1.43 1.237.144.235.42.8.376 1.176 0 .356-.086.69-.28.974a1.6 1.6 0 0 1-.706.566c-.47.202-1.014.211-1.359.211h-5.97c-.345 0-.89-.01-1.36-.211a1.6 1.6 0 0 1-.705-.566A1.7 1.7 0 0 1 6.67 21c.024-.257.132-.852.368-1.183-.4-.392-1.003-.89-1.422-1.23-.388-.313-.788-.636-1.16-.983-.896-.836-1.667-1.844-2.063-3.44-.205-.827-.265-1.706.344-2.31.287-.283.65-.426 1.002-.503"
      />
    </svg>
  );
};
export default Noodles;
