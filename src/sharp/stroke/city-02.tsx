import React from "react";
const City_02: React.FC<
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
        d="M2 22h20M16 4H8v18h8zM8 13H4v9h4zM20 13h-4v9h4zM12 4V2M12 22v-4M11 15h2m-2-3.5h2M11 8h2"
      />
    </svg>
  );
};
export default City_02;
