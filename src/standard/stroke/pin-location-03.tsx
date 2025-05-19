import React from "react";
const PinLocation_03: React.FC<
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
        d="M5 16c-1.25.633-2 1.439-2 2.316C3 20.35 7.03 22 12 22s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316M12 10v7"
      />
      <circle
        cx={12}
        cy={6}
        r={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default PinLocation_03;
