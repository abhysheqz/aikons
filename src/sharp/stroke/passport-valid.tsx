import React from "react";
const PassportValid: React.FC<
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
        d="M12 3.5H2v18h20v-13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 17c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 6.5l2 2 6-6"
      />
    </svg>
  );
};
export default PassportValid;
