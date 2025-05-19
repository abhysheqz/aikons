import React from "react";
const Yen: React.FC<
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
        d="m5 3 7 7.556m0 0L19 3m-7 7.556V21M6.166 13h11.667M6.166 17h11.667"
      />
    </svg>
  );
};
export default Yen;
