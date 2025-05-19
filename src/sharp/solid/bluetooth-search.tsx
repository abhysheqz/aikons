import React from "react";
const BluetoothSearch: React.FC<
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
        d="M12.64 16.74a4.6 4.6 0 1 1 8.483 2.469l1.377 1.377L21.086 22l-1.377-1.377a4.6 4.6 0 0 1-7.068-3.883m4.6-2.6a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.644 2.133a1 1 0 0 1 1.002.003l5.998 3.5a1 1 0 0 1 .136 1.632L9.702 11.5l2.08 1.732L10.5 14.77l-1.36-1.133v4.623l1.271-.742 1.008 1.728-2.774 1.619A1 1 0 0 1 7.142 20v-6.366L2.78 17.268 1.5 15.732 6.578 11.5 1.5 7.268l1.28-1.536 4.362 3.634V3a1 1 0 0 1 .502-.867m1.498 7.23V4.742l3.262 1.904z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BluetoothSearch;
