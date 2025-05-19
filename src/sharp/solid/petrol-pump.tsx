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
        d="M2.5 1.5h14v12a3 3 0 0 1 3 3v.5a.5.5 0 0 0 1 0v-5.086l-1-1v-3L17.086 5.5 18.5 4.086l4 4V17a2.5 2.5 0 0 1-5 0v-.5a1 1 0 0 0-1-1v5h1v2h-16v-2h1zm12 8v-6h-10v6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PetrolPump;
