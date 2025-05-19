import React from "react";
const TableLamp_01: React.FC<
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
        d="M4 12v10m16-10v10M3 12h18M4 17h16M11 14.5h2M14.386 3.355q-.155-.256-.28-.475c-.25-.443-.376-.664-.576-.772S13.064 2 12.531 2H11.47c-.533 0-.8 0-1 .108s-.324.33-.575.772h0a17 17 0 0 1-.28.475C8.413 5.324 7.812 6.308 8.052 6.654S9.42 7 11.676 7h.648c2.256 0 3.384 0 3.624-.346s-.36-1.33-1.562-3.299M12 7v5"
      />
    </svg>
  );
};
export default TableLamp_01;
