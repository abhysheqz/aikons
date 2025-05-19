import React from "react";
const Presentation_06: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17v5M8.5 22l.715-.817c.294-.336.441-.504.638-.594s.42-.089.867-.089h2.56c.447 0 .67 0 .867.09.197.089.344.257.638.593L15.5 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17h20"
      />
    </svg>
  );
};
export default Presentation_06;
