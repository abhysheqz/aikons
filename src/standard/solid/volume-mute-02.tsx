import React from "react";
const VolumeMute_02: React.FC<
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
        d="M17.293 9.293a1 1 0 0 1 1.414 0L20 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L21.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L20 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L18.586 12l-1.293-1.293a1 1 0 0 1 0-1.414M14.36 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.156.63L6.78 16.25H4a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 4 7.75h2.78l6.814-4.38a.75.75 0 0 1 .765-.028"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeMute_02;
