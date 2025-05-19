import React from "react";
const Mic_02: React.FC<
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
        d="M6.25 6.75a5.75 5.75 0 1 1 11.5 0v4a5.75 5.75 0 0 1-11.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 19.695c-4.5-.497-8-4.312-8-8.945h2a7 7 0 1 0 14 0h2c0 4.633-3.5 8.448-8 8.945V21h2v2H9v-2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mic_02;
