import React from "react";
const SofaSingle: React.FC<
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
        d="M19.25 9.5c-1.703 0-2 2-2 2l-1 4h-8.5l-1-4s-.297-2-2-2a2 2 0 0 0-1 3.733l1.5 5.267h13.5l1.5-5.267a2 2 0 0 0-1-3.733"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.029 21.765 1-4 1.94.485-1 4zm10 .485-1-4 1.94-.485 1 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.603 8.624c.826.253 1.352.854 1.653 1.378.195.338.313.668.382.907l.893 3.591h6.939l.893-3.591a4.2 4.2 0 0 1 .382-.907c.3-.524.826-1.123 1.65-1.378l.2-3.937A2.75 2.75 0 0 0 15.85 1.75H8.147a2.75 2.75 0 0 0-2.743 2.938z"
      />
    </svg>
  );
};
export default SofaSingle;
