import React from "react";
const FileEuro: React.FC<
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
        d="M10.829 1a3 3 0 0 0-2.12.877L2.881 7.693A3 3 0 0 0 2 9.817v10.185a3 3 0 0 0 3 3h7.5a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1v-10h4a3 3 0 0 0 3-3V3h7a1 1 0 0 1 1 1v6.5a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 16.606A3.606 3.606 0 0 1 18.606 13c.701 0 1.365.163 1.947.527.582.363 1.024.89 1.341 1.526a1 1 0 1 1-1.788.894c-.183-.364-.394-.587-.613-.724-.217-.136-.5-.223-.887-.223-.887 0-1.606.719-1.606 1.606V17h2a1 1 0 1 1 0 2h-2v.394c0 .887.719 1.606 1.606 1.606.386 0 .67-.087.887-.223.219-.137.43-.36.613-.724a1 1 0 1 1 1.788.894c-.317.636-.76 1.163-1.34 1.526-.583.364-1.247.527-1.948.527A3.606 3.606 0 0 1 15 19.394V19a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEuro;
