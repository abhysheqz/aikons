import React from "react";
const PinLocation_01: React.FC<
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
        d="M12 10a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M7.945 15.106a1 1 0 0 1 .447 1.341l-1.414 2.83a.5.5 0 0 0 .447.723h9.146a.5.5 0 0 0 .447-.723l-1.414-2.83a1 1 0 0 1 1.788-.894l1.415 2.83C19.638 20.043 18.43 22 16.571 22H7.425c-1.858 0-3.067-1.956-2.236-3.618l1.415-2.829a1 1 0 0 1 1.341-.447"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinLocation_01;
