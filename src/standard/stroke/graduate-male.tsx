import React from "react";
const GraduateMale: React.FC<
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
        d="M19 13v2c0 5.75-7 7-7 7s-7-1.25-7-7v-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 10c-2.005-.632-4.412-1-7-1s-4.995.368-7 1v3.5c2.005-.632 4.412-1 7-1s4.995.368 7 1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 10 2.47 8.45a.96.96 0 0 1 .05-1.68l8.524-4.532a2.04 2.04 0 0 1 1.912 0L21.48 6.77a.96.96 0 0 1 .05 1.68L19 10"
      />
    </svg>
  );
};
export default GraduateMale;
