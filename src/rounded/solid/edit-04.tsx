import React from "react";
const Edit_04: React.FC<
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
        d="M11 20.75a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.05 2.536a2.75 2.75 0 0 0-2.443 0c-.407.202-.763.558-1.223 1.02l-.884.883L19.56 9.5l.885-.884c.46-.46.817-.816 1.019-1.223a2.75 2.75 0 0 0 0-2.442c-.202-.408-.558-.764-1.02-1.224l-.171-.172c-.46-.46-.816-.817-1.224-1.019M18.5 10.56 13.44 5.5l-9.884 9.883c-.495.494-.886.884-1.097 1.393-.21.508-.21 1.061-.21 1.76L2.25 21c0 .414.336.75.75.75h2.464c.699 0 1.251.001 1.76-.21.508-.21.899-.601 1.392-1.096z"
      />
    </svg>
  );
};
export default Edit_04;
