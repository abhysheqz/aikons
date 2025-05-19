import React from "react";
const ImageDone_01: React.FC<
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
        d="M18.821 2.25H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20V5.765L18.479 9.69a2.25 2.25 0 0 1-3.32.151l-2.5-2.5a2.25 2.25 0 1 1 3.182-3.182l.758.758zm.977 17.571c0 .54-.437.976-.977.976H6.336l7.51-6.758a2 2 0 0 1 2.447-.178l3.505 2.337zM7.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.39 1.482a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDone_01;
