import React from "react";
const BatteryEcoCharging: React.FC<
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
        d="m19.004 10.512 2.996.495v3.986l-2.996.519"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.024 20c-.488-5.4 3.97-6.5 5.97-9m.034 4.835c2.546-.71 4.179-2.413 4.784-4.987C16.5 7.933 15.27 3.963 12.098 4c0 0 .323 1.26.04 1.876-1.04 2.275-4.644 2.117-5.813 5-.695 1.615-.275 3.418 1.034 4.452.823.65 2.447.849 3.67.507Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.001 19.762V7.109a.1.1 0 0 1 .1-.1h3.913m1.985 12.009h10.905a.1.1 0 0 0 .1-.1V9.002"
      />
    </svg>
  );
};
export default BatteryEcoCharging;
