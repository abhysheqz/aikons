import React from "react";
const MedicineBottle_02: React.FC<
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
        d="M4 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0H6v2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 5a1 1 0 0 0-.716 1.698l-.002-.002s.042.062.095.22c.058.178.105.411.12.67.033.538-.078 1.014-.29 1.304l-1.33 1.664A4 4 0 0 0 3 13.052V21a2 2 0 0 0 2 2h7.25a6.25 6.25 0 0 1 4.55-11.2 4 4 0 0 0-.676-1.246L14.792 8.89c-.211-.29-.322-.766-.29-1.304.016-.259.063-.492.121-.67.053-.158.095-.22.095-.22l-.002.002A1 1 0 0 0 14 5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.279 13.832a4.751 4.751 0 0 0-5.928 7.21zm1.186.919-5.983 7.277a4.75 4.75 0 0 0 5.983-7.277"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicineBottle_02;
