import React from "react";
const EditOff_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 6 4 4M3 3l18 18M11.524 7.524l3.943-3.944a1.98 1.98 0 0 1 2.802 0l2.15 2.151a1.98 1.98 0 0 1 0 2.802l-3.943 3.943m-2 2-4.635 4.636a3.96 3.96 0 0 1-2.15 1.106L3 21l.782-4.69a3.96 3.96 0 0 1 1.106-2.151l4.636-4.635"
      />
    </svg>
  );
};
export default EditOff_03;
