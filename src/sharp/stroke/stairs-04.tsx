import React from "react";
const Stairs_04: React.FC<
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
        d="M22 15H2v3h20zM20 12H4v3h16zM18 9H6v3h12zM16 6H8v3h8z"
      />
    </svg>
  );
};
export default Stairs_04;
