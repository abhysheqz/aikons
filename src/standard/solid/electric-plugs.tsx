import React from "react";
const ElectricPlugs: React.FC<
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
        d="M7.33 4.25a2.75 2.75 0 0 0-2.717 3.168l1.123 7.304a4.75 4.75 0 0 0 4.695 4.028h3.137a4.75 4.75 0 0 0 4.695-4.028l1.123-7.304a2.75 2.75 0 0 0-2.718-3.168zm5.296 4.666a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 0 0 .624 1.166h2.599l-1.223 1.834a.75.75 0 0 0 1.248.832l2-3a.75.75 0 0 0-.624-1.166h-2.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.002 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M12.002 17a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricPlugs;
