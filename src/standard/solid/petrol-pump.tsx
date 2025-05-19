import React from "react";
const PetrolPump: React.FC<
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
        d="M2.5 4.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9a3 3 0 0 1 3 3v.5a.5.5 0 0 0 1 0v-5.086l-.707-.707a1 1 0 0 1-.293-.707V7.914l-1.707-1.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 .293.707V17a2.5 2.5 0 0 1-5 0v-.5a1 1 0 0 0-1-1v5a1 1 0 1 1 0 2h-14a1 1 0 1 1 0-2zm3-1a1 1 0 0 0-1 1v5h10v-5a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PetrolPump;
