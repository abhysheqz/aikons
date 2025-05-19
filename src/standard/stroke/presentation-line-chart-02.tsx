import React from "react";
const PresentationLineChart_02: React.FC<
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
        d="M21.5 14V5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17.5V22M8.5 22l.715-.817c.294-.336.441-.504.638-.594s.42-.089.867-.089h2.56c.447 0 .67 0 .867.09.197.089.344.257.638.593L15.5 22M8 10.225l.697-.915c.878-1.154 2.432-1.062 3.209.19.75 1.21 2.237 1.344 3.134.283L16 8.65"
      />
    </svg>
  );
};
export default PresentationLineChart_02;
