import React from "react";
const CallMissed_02: React.FC<
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
        d="M16.546 12.838v4.622a1 1 0 0 0 .683.949l3.455 1.152A1 1 0 0 0 22 18.612V17.21c0-.508-.19-1.002-.556-1.354-5.363-5.142-13.524-5.142-18.888 0A1.87 1.87 0 0 0 2 17.21v1.409a1 1 0 0 0 1.312.95l3.454-1.134a1 1 0 0 0 .689-.95v-4.647M10.5 3H7v3.5m.344-3.156L12 8l5-5"
      />
    </svg>
  );
};
export default CallMissed_02;
