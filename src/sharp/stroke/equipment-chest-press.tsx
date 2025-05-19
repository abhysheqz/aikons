import React from "react";
const EquipmentChestPress: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 15 10 8h4l1.5 7zM7.5 19 9 17.5h6l1.5 1.5M12 17.5V22m0 0h7m-7 0H5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 14V9l-4-5H7L3 9v5M3 12h3m15 0h-3M12 8V2"
      />
    </svg>
  );
};
export default EquipmentChestPress;
