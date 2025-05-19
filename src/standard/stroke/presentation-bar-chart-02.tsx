import React from "react";
const PresentationBarChart_02: React.FC<
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
        d="M21.5 15V5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v4M8.5 22l.715-.817c.294-.336.441-.504.638-.594s.42-.089.867-.089h2.56c.447 0 .67 0 .867.09.197.089.344.257.638.593L15.5 22M8 13v-3m4 3V7m4 6v-2"
      />
    </svg>
  );
};
export default PresentationBarChart_02;
