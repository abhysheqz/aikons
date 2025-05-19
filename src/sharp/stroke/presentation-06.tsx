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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16.5v5M8 21.5l1.5-2h5l1.5 2M3.5 16.5v-14h17v14zM2 16.5h20"
      />
    </svg>
  );
};
export default Presentation_06;
