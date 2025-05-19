import React from "react";
const TruckMonster: React.FC<
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
        d="M21 15v-5l-3-1-3-5H9v10.5M9 10.5H3V15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 9h-6V4M9 6H6M12 12h2M13.5 18h-3m-1-3h5M5 15H2v3h2.5M19 15h3v3h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM16.5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};
export default TruckMonster;
