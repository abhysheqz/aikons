import React from "react";
const EcoEnergy: React.FC<
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
        d="m9 5 .96-3A10.22 10.22 0 0 0 2 9.96M19 9l3 .96A10.22 10.22 0 0 0 14.04 2M15 19l-.96 3A10.22 10.22 0 0 0 22 14.04M9.96 22A10.22 10.22 0 0 1 2 14.04L5 15"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.002 11.032c-1.215.84-2.721 2.39-3.465 5.496m.642-2.578c-2.1-4.764 2.698-6.46 6.31-6.511-.038 4.085-1.297 8.914-6.31 6.511Z"
      />
    </svg>
  );
};
export default EcoEnergy;
