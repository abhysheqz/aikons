import React from "react";
const House_01: React.FC<
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
        d="M13 2 2 7M12 8l10 4M18 10V8M6.5 10.998l2 .002m-2 3.998h2M15.5 14h2M16.5 22v-3.5M21 11.944V22l-18-.006V6.734M12 22V2.5"
      />
    </svg>
  );
};
export default House_01;
