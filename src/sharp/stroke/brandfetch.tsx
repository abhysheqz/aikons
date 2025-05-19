import React from "react";
const Brandfetch: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5 6.857c5.5-4.431 14-3.318 14 .671C19 10.567 11.5 12 11.5 12v.235c1.281-.015 6-.137 6 2.216 0 4.597-9.5 3.412-9.5 3.412"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8.5 7 20"
      />
    </svg>
  );
};
export default Brandfetch;
