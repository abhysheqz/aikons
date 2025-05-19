import React from "react";
const Prescription: React.FC<
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
        strokeWidth={1.5}
        d="m19 21-9-9M5 19V3h4.5a4.5 4.5 0 1 1 0 9H5M19 15l-6 6"
      />
    </svg>
  );
};
export default Prescription;
