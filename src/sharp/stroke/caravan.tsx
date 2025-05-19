import React from "react";
const Caravan: React.FC<
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
        d="M19 18h3v-2.5M19 18v-8a6 6 0 0 0-6-6H2v14h5m12 0h-8"
      />
      <circle cx={9} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7H5v5h7z" />
    </svg>
  );
};
export default Caravan;
