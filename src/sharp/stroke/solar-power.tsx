import React from "react";
const SolarPower: React.FC<
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
        d="M5 11v-.75h-.528l-.178.498zm-2.5 7-.706-.252A.75.75 0 0 0 2.5 18.75zM19 11l.706-.252-.177-.498H19zm2.5 7v.75a.75.75 0 0 0 .706-1.002zM4.294 10.748l-2.5 7 1.413.504 2.5-7zm14 .504 2.5 7 1.412-.504-2.5-7zM2.5 18.75h19v-1.5h-19zm2.5-7h14v-1.5H5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 11 8 18m6.5-7 1.5 7M4 14.5h16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.333 5.5A2.333 2.333 0 0 1 12 7.833M14.333 5.5A2.333 2.333 0 0 0 12 3.167M14.333 5.5H15.5M12 7.833A2.333 2.333 0 0 1 9.667 5.5M12 7.833V9M9.667 5.5A2.333 2.333 0 0 1 12 3.167M9.667 5.5H8.5M12 3.167V2m1.65 1.85.825-.825M10.35 7.15l-.825.825m4.125-.825.825.825M10.35 3.85l-.825-.825"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 22v-4m-5 4v-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22h20"
      />
    </svg>
  );
};
export default SolarPower;
