import React from "react";
const EquipmentWeightlifting: React.FC<
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
        d="M13 2a1 1 0 1 0-2 0v2H6.92a3 3 0 0 0-2.278 1.048L2.241 7.849a1 1 0 0 0 1.518 1.302l2.402-2.802A1 1 0 0 1 6.92 6H11v1.25h-1A1.75 1.75 0 0 0 8.25 9v1c0 .372.116.716.314 1a1.74 1.74 0 0 0-.314 1v1c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 15.75 13v-1c0-.372-.116-.716-.314-1 .198-.284.314-.628.314-1V9A1.75 1.75 0 0 0 14 7.25h-1V6h4.08a1 1 0 0 1 .76.35l2.4 2.8a1 1 0 1 0 1.52-1.3l-2.402-2.802A3 3 0 0 0 17.08 4H13zm-1 14.5h2.586a2 2 0 0 1 1.414.586l1.207 1.207a1 1 0 0 1-1.414 1.414L14.586 18.5H13V21h5.5a1 1 0 1 1 0 2h-13a1 1 0 1 1 0-2H11v-2.5H9.414l-1.207 1.207a1 1 0 0 1-1.414-1.414L8 17.086a2 2 0 0 1 1.414-.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentWeightlifting;
