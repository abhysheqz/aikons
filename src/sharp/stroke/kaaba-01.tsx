import React from "react";
const Kaaba_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path stroke="currentColor" strokeWidth={1.5} d="M3.5 22V4l9-2 9 2v18" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.5 9 9-2 9 2M3.5 13 8 12m13.5 1-2.25-.5L17 12m-2.25-.5L12.5 11l-2.25.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 22h20"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12.5 7v15" />
    </svg>
  );
};
export default Kaaba_01;
