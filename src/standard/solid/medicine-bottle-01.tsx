import React from "react";
const MedicineBottle_01: React.FC<
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
        d="M8 5a1 1 0 0 0-.716 1.698l-.002-.002s.042.062.095.22c.058.178.105.411.12.67.033.538-.078 1.014-.29 1.304l-1.33 1.664A4 4 0 0 0 5 13.052V21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7.948a4 4 0 0 0-.876-2.498L16.792 8.89c-.211-.29-.322-.766-.29-1.304.016-.259.063-.492.121-.67.053-.158.095-.22.095-.22l-.002.002A1 1 0 0 0 16 5zm5 8.5a1 1 0 1 0-2 0V15H9.5a1 1 0 1 0 0 2H11v1.5a1 1 0 1 0 2 0V17h1.5a1 1 0 1 0 0-2H13z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicineBottle_01;
