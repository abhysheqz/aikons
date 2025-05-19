import React from "react";
const FitToScreen: React.FC<
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
        d="M4 3v18H2V3zM22 3v18h-2V3zM10.414 9l-2 2h7.172l-2-2L15 7.586 18.414 11h.086v.086l.914.914-.914.914V13h-.086L15 16.414 13.586 15l2-2H8.414l2 2L9 16.414 5.586 13H5.5v-.086L4.586 12l.914-.914V11h.086L9 7.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FitToScreen;
