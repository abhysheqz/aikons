import React from "react";
const Presentation_03: React.FC<
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
        d="M3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3M2 2.5h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 0v-3"
      />
    </svg>
  );
};
export default Presentation_03;
