import React from "react";
const FileMinus: React.FC<
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
        d="M3.25 4h10v2h-10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 2.75v-1.5h17.5v14.12l-7.39 7.38H3.252V7.25H14.5v-4.5zm9.313 18.045 6.236-6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileMinus;
