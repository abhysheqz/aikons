import React from "react";
const RotateLeft_06: React.FC<
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
        d="M9.67 1.056a1 1 0 0 1 1.112.32l.73.916c3.558-2.065 8.422-.824 10.39 3.275a1 1 0 0 1-1.804.866 5.41 5.41 0 0 0-7.318-2.55l.393.494A1 1 0 0 1 12.391 6H10a1 1 0 0 1-1-1V2a1 1 0 0 1 .67-.944"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.294 12.233a.45.45 0 0 0-.169-.614L5.191 8.24a1.154 1.154 0 1 1 1.162-1.994l8.256 4.923a.45.45 0 0 0 .668-.495l-.948-3.784a1.425 1.425 0 0 1 2.644-1.008l3.487 6.646a2.5 2.5 0 0 1-.055 2.436l-3.57 6.083c-.958 1.633-3.07 2.184-4.717 1.248l-9.096-5.166a1.029 1.029 0 0 1 1.015-1.79l5.284 2.995a.45.45 0 0 0 .443-.783L2.528 13.45a1.002 1.002 0 0 1 .988-1.744l6.33 3.582a.45.45 0 1 0 .444-.784l-7.427-4.195a1.019 1.019 0 1 1 1.003-1.773l6.815 3.867a.45.45 0 0 0 .613-.17"
      />
    </svg>
  );
};
export default RotateLeft_06;
