import React from "react";
const Bathtub_02: React.FC<
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
        d="M6.5 2A2.5 2.5 0 0 1 9 4.5V5a1 1 0 0 1-2 0v-.5a.5.5 0 0 0-1 0V8h3.333a3 3 0 0 1 1.8.6l2.934 2.2a1 1 0 0 0 .6.2H22a1 1 0 1 1 0 2v2c0 2-1.252 3.64-3 4.452V21a1 1 0 1 1-2 0v-1.02q-.248.02-.5.02h-9q-.252 0-.5-.02V21a1 1 0 1 1-2 0v-1.548C3.252 18.64 2 17 2 15v-5a1 1 0 0 1 0-2h2V4.5A2.5 2.5 0 0 1 6.5 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bathtub_02;
