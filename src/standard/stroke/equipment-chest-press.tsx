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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.76 13.79 1.07-5a1 1 0 0 1 .978-.79h2.384a1 1 0 0 1 .977.79l1.072 5a1 1 0 0 1-.978 1.21H9.737a1 1 0 0 1-.978-1.21M7.5 19l1.207-1.207a1 1 0 0 1 .707-.293h5.172a1 1 0 0 1 .707.293L16.5 19M12 17.5V22m0 0h6.5M12 22H5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.5V9.35a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 16.52 4H7.48a1 1 0 0 0-.78.375L3.22 8.726a1 1 0 0 0-.22.625V13.5M3 12h2.5M21 12h-2.5M12 8V2"
      />
    </svg>
  );
};
export default EquipmentChestPress;
