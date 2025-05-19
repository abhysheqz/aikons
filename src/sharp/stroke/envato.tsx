import React from "react";
const Envato: React.FC<
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
        d="M5.288 7.958C4.926 12 6.89 14.66 6.89 14.66 7.228 9.522 10.945 3 17.897 2c6.456 9.5 2.12 20-6.41 20-6.713 0-11.546-8.5-6.2-14.042Z"
      />
    </svg>
  );
};
export default Envato;
