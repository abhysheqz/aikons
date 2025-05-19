import React from "react";
const TropicalStorm: React.FC<
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
        d="m17.447 7.857-1.168-1.441 3.932-2.569C7.27 1.803 5.343 9.75 5.264 10.107l-.008.034-.012.047a6.53 6.53 0 0 0-.071 3.117 6.8 6.8 0 0 0 1.384 2.836l1.167 1.44-3.935 2.572c12.94 2.056 14.871-5.905 14.95-6.262l.008-.034.012-.047c.275-1.016.3-2.083.071-3.117a6.8 6.8 0 0 0-1.383-2.836Z"
      />
      <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default TropicalStorm;
