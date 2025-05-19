import React from "react";
const PhoneDeveloperMode: React.FC<
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
        d="M14 2h-4l.5 1h3zM15.5 15.5 19 12l-3.5-3.5M8.5 15.5 5 12l3.5-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.5 7V2h-13v5m0 10v5h13v-5"
      />
    </svg>
  );
};
export default PhoneDeveloperMode;
