import React from "react";
const HourglassOff: React.FC<
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
        d="M19 2v3.333c0 2.468-1.408 4.622-3.5 5.775M12 12c-3.866 0-7-2.985-7-6.667V5M5 22v-3.333C5 14.985 8.134 12 12 12M6.5 2H20m-2.5 20H4M2 2l20 20"
      />
    </svg>
  );
};
export default HourglassOff;
