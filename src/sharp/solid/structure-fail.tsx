import React from "react";
const StructureFail: React.FC<
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
        fillRule="evenodd"
        d="M6.002 4a1 1 0 0 1 1-1H12v2H8.001L8 7H6zm2 15L8 17H6l.002 3a1 1 0 0 0 1 1H12v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM14.25 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 6.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.707 4.457L8.414 12l1.293 1.293-1.414 1.414L7 13.414l-1.293 1.293-1.414-1.414L5.586 12l-1.293-1.293 1.414-1.414L7 10.586l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureFail;
