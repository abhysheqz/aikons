import React from "react";
const MaskTheater_01: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5c3.078 0 5.853-.724 7.81-1.884A.8.8 0 0 1 20.223 3c.429 0 .777.348.777.777V10c0 7-4.5 12-9 12s-9-5-9-12V3.777C3 3.348 3.348 3 3.777 3c.146 0 .288.042.413.116C6.147 4.276 8.922 5 12 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 10c.368-.307.904-.5 1.5-.5s1.132.193 1.5.5M12 15.7c1.192 0 2.263-.27 3-.7 0 0-.5 3-3 3s-3-3-3-3c.737.43 1.808.7 3 .7M14.5 10c.368-.307.904-.5 1.5-.5s1.131.193 1.5.5"
      />
    </svg>
  );
};
export default MaskTheater_01;
