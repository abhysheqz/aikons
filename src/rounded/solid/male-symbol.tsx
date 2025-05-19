import React from "react";
const MaleSymbol: React.FC<
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
        d="M10 9a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-7a7 7 0 0 0-5.606 11.192L4.02 18.564C4.001 18.165 4 17.662 4 17v-2a1 1 0 1 0-2 0v2.066c0 .886 0 1.65.082 2.262.088.655.287 1.284.797 1.793.51.51 1.138.709 1.793.797C5.284 22 6.048 22 6.934 22H9a1 1 0 1 0 0-2H7c-.662 0-1.165-.001-1.564-.021l5.372-5.373A7 7 0 1 0 15 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaleSymbol;
