import React from "react";
const SolarPanel_03: React.FC<
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
        strokeWidth={1.5}
        d="M9 9a3 3 0 1 1 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.307 12H8.693c-1.318 0-1.976 0-2.487.344-.51.344-.755.953-1.244 2.17l-.804 2c-.998 2.486-1.498 3.729-.9 4.607S5.2 22 7.889 22h8.222c2.689 0 4.033 0 4.631-.879.598-.878.098-2.121-.9-4.607l-.804-2c-.49-1.217-.734-1.826-1.244-2.17S16.624 12 15.307 12M12 12v10M20 17H4M12 3V2M18 9h1M5 9h1M16.242 4.757l.707-.707M7.05 4.05l.707.707"
      />
    </svg>
  );
};
export default SolarPanel_03;
