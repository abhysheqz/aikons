import React from "react";
const Pi: React.FC<
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
        d="M3 9.3c0-1.8 2.061-3.6 4.685-3.6h9.272C19.2 5.7 21 4.35 21 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.502 6-.895 12.314c-.09 1.451.903 2.686 2.158 2.686.932 0 1.759-.69 2.053-1.715l.284-.985M10 6c-.133 3.063-.4 8.75-.8 10.5S8 20 6 20"
      />
    </svg>
  );
};
export default Pi;
