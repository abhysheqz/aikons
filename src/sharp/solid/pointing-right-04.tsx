import React from "react";
const PointingRight_04: React.FC<
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
        d="m12.138 8.165 1.144 1.001h5.968a2.5 2.5 0 0 1 0 5h-4.5V19A3.75 3.75 0 0 1 11 22.75H5A3.75 3.75 0 0 1 1.25 19v-8.906L5.447 7.36c.693-.455 1.238-.734 1.724-.898.5-.168.903-.202 1.281-.211a3.8 3.8 0 0 1 1.12.144c.44.126.82.346 1.213.637.377.28.805.654 1.33 1.113z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.543 1.25 3.207 3.207-3.207 3.207-1.414-1.414.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_04;
