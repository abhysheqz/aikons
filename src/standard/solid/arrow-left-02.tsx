import React from "react";
const ArrowLeft_02: React.FC<
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
        d="M8.293 17.707a1 1 0 0 0 1.414-1.414L6.414 13H20a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-4.995 4.995a1 1 0 0 0-.214.31 1 1 0 0 0-.084.399v.013a1 1 0 0 0 .293.697z"
      />
    </svg>
  );
};
export default ArrowLeft_02;
