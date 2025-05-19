import React from "react";
const Iconjar: React.FC<
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
        strokeWidth={1.5}
        d="M19.998 5.507H14V4.505A2 2 0 0 0 12.002 2.5a2 2 0 0 0-1.998 2.004v1.002H4.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.13 8.517h6.826c.488.46 1.625 1.98.31 4.592-.766 1.523-.734 3.665 1.315 3.819 1.638 0 2.405-1.8 2.556-2.979.324-2.522-.48-4.735-.764-5.432h5.497a.01.01 0 0 1 .008.016l-1.456 1.957a.01.01 0 0 0 .002.013c2.656 2.183 1.69 3.936-.964 10.996H6.54c-2.654-7.06-3.62-8.813-.964-10.995a.01.01 0 0 0 .002-.014L4.122 8.533a.01.01 0 0 1 .008-.016Z"
      />
    </svg>
  );
};
export default Iconjar;
