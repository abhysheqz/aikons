import React from "react";
const Remove_02: React.FC<
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
        d="M5.157 8.75h13.686c.43 0 .798 0 1.12.095.867.258 1.497.992 1.709 1.869.078.327.078.703.078 1.196v.18c0 .493 0 .869-.078 1.196-.212.877-.842 1.61-1.709 1.869-.322.096-.69.096-1.12.095H5.157c-.43 0-.798.001-1.12-.095-.867-.258-1.497-.992-1.709-1.869-.079-.327-.078-.703-.078-1.196v-.18c0-.493 0-.869.078-1.196.212-.877.842-1.61 1.709-1.869.322-.096.69-.096 1.12-.095"
      />
    </svg>
  );
};
export default Remove_02;
