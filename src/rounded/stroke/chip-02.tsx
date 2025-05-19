import React from "react";
const Chip_02: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={12} cy={12} r={6} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 12c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25 1.5-.56 1.5-1.25S12.828 12 12 12Zm0 0c.828 0 1.5-.56 1.5-1.25S12.828 9.5 12 9.5s-1.5.56-1.5 1.25S11.172 12 12 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v4m0 12v4M22 12h-4M6 12H2"
      />
    </svg>
  );
};
export default Chip_02;
