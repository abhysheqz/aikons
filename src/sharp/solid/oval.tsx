import React from "react";
const Oval: React.FC<
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
        d="M1.25 12c0-5.457 4.89-9.75 10.75-9.75S22.75 6.543 22.75 12 17.86 21.75 12 21.75 1.25 17.457 1.25 12"
      />
    </svg>
  );
};
export default Oval;
