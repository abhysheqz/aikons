import React from "react";
const Kaaba_01: React.FC<
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
        d="M3.5 22V5.26a1 1 0 0 1 .732-.963l8-2.223a1 1 0 0 1 .536 0l8 2.223a1 1 0 0 1 .732.963V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.5 9 8.784-1.952a1 1 0 0 1 .434 0L21.5 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m20.15 12.7 1.35.3m-5.4-1.2.9.2m-3.6-.8-.9-.2-.9.2m-6.75 1.5L3.5 13m5.4-1.2L8 12M2.5 22h20"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12.5 7v15" />
    </svg>
  );
};
export default Kaaba_01;
