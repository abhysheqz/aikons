import React from "react";
const Kaaba_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 22V4a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 22v-8h-5v8M3.5 6h18M3.5 19h4m5 0h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9h2m3 0h2m3 0h2m3 0h2M2.5 22h20"
      />
    </svg>
  );
};
export default Kaaba_02;
