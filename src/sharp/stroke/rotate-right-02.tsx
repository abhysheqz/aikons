import React from "react";
const RotateRight_02: React.FC<
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
        strokeWidth={1.5}
        d="m10.867 8.228-.497 2.624 8.11-4.63a1.69 1.69 0 0 1 2.296.608 1.653 1.653 0 0 1-.615 2.27l-4.367 2.495 1.038 2.685c.685 1.724 1.028 2.586 1.016 3.338-.02 1.243-.47 2.39-1.695 3.09-.854.488-1.549.607-3.384.978l-2.76.312-4.997-6.495 2.652-8.169A1.67 1.67 0 0 1 9.476 6.29a1.654 1.654 0 0 1 1.39 1.938Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.999 6c.904-1.778 2.241-2.945 4.074-3.632 1.276-.477 2.696-.462 3.992-.04.989.28 2.267 1.11 3.069 2.126M14.508 2v3.003h-2.51"
      />
    </svg>
  );
};
export default RotateRight_02;
