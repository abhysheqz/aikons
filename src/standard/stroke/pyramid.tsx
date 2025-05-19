import React from "react";
const Pyramid: React.FC<
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
        d="M12 2v20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 15 6.32 2.709M9 15l-6.32 2.709m18.765.513-9.259 3.704a.5.5 0 0 1-.371 0l-9.26-3.704a.5.5 0 0 1-.238-.73l9.26-14.814a.5.5 0 0 1 .847 0l9.26 14.815a.5.5 0 0 1-.239.73"
      />
    </svg>
  );
};
export default Pyramid;
