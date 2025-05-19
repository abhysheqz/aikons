import React from "react";
const RotateRight_06: React.FC<
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
        d="M14.33 1.056A1 1 0 0 1 15 2v3a1 1 0 0 1-1 1h-2.391a1 1 0 0 1-.782-1.623l.393-.494a5.41 5.41 0 0 0-7.318 2.55 1 1 0 0 1-1.804-.866C4.066 1.468 8.93.227 12.488 2.292l.73-.915a1 1 0 0 1 1.112-.32"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.592 12.233a.45.45 0 0 1 .17-.614l5.934-3.379a1.154 1.154 0 1 0-1.162-1.994L9.277 11.17a.45.45 0 0 1-.667-.495l.948-3.784a1.425 1.425 0 0 0-2.644-1.008l-3.488 6.646a2.5 2.5 0 0 0 .056 2.436l3.57 6.083c.958 1.633 3.07 2.184 4.717 1.248l9.096-5.166a1.029 1.029 0 0 0-1.015-1.79l-5.284 2.995a.45.45 0 0 1-.444-.783l7.237-4.102a1.003 1.003 0 0 0-.988-1.744l-6.331 3.582a.45.45 0 1 1-.443-.784l7.427-4.195a1.019 1.019 0 1 0-1.004-1.773l-6.814 3.867a.45.45 0 0 1-.614-.17"
      />
    </svg>
  );
};
export default RotateRight_06;
