import React from "react";
const CourtHouse: React.FC<
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
        d="M5 9.083C5 7.917 6 7.5 6.5 7.5c.994 0 1.5.754 1.5 1.583C8 11.016 6.657 12 5 12s-3-1.567-3-3.5S3.343 5 5 5h14c1.657 0 3 1.567 3 3.5S20.657 12 19 12s-3-.984-3-2.917c0-.83.506-1.583 1.5-1.583.5 0 1.5.417 1.5 1.583M21 19H3v3h18zM13 9h-2M9.5 19v-4m5 4v-4M19 5V2H5v3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12v7h14v-7"
      />
    </svg>
  );
};
export default CourtHouse;
