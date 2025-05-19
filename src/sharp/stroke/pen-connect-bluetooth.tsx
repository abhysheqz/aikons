import React from "react";
const PenConnectBluetooth: React.FC<
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
        d="m2 9.94 6.998-5.882L5.5 2v9.998l3.498-2.059L2 4.06"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.916 9.041-9.904 9.95v3.012h2.98l10.05-10.008m-3.127-2.954 3.056-3.003a.1.1 0 0 1 .142.002l2.858 2.93a.1.1 0 0 1-.002.141l-2.926 2.884m-3.127-2.954 3.127 2.954"
      />
    </svg>
  );
};
export default PenConnectBluetooth;
