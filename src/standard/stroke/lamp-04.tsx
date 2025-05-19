import React from "react";
const Lamp_04: React.FC<
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
        d="M12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.146 2H9.854a2 2 0 0 0-1.857 1.257L5.05 10.63A1 1 0 0 0 5.977 12h12.046a1 1 0 0 0 .928-1.371l-2.948-7.372A2 2 0 0 0 14.146 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12v4m0 3v3m0 0H8m4 0h4"
      />
    </svg>
  );
};
export default Lamp_04;
