import React from "react";
const EnergyEllipse: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.129 11.598 3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.515c-.441 0-.677-.618-.385-1.011"
      />
    </svg>
  );
};
export default EnergyEllipse;
