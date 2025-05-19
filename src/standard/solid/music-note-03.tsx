import React from "react";
const MusicNote_03: React.FC<
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
        d="M22 2a1 1 0 0 0-1.263-.965l-11 3A1 1 0 0 0 9 5v9.758a4.5 4.5 0 1 0 2 3.742v-6.736l9-2.454v3.225A4 4 0 1 0 22 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNote_03;
