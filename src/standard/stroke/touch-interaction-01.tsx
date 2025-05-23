import React from "react";
const TouchInteraction_01: React.FC<
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
        d="m7 8-1.005-.003a2 2 0 0 1-1.995-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.992a2 2 0 0 1-2 2h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.506 22v-2l1.222-1.831c.508-.762.78-1.658.78-2.574 0-.72-.16-1.444-.66-1.964-.851-.886-2.621-2.131-5.845-2.131V6.501a1.501 1.501 0 1 0-3.002 0V15l-1.717-1.716a1.627 1.627 0 0 0-2.42.134c-.5.623-.47 1.517.067 2.108L10 20v2"
      />
    </svg>
  );
};
export default TouchInteraction_01;
