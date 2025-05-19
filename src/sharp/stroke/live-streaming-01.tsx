import React from "react";
const LiveStreaming_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 21V11H2v10zM16 6c-.977-1.226-2.407-2-4-2s-3.023.774-4 2M14 8c-.489-.613-1.203-1-2-1s-1.511.387-2 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5 14v4h1.5M19 18h-2v-2m0 0v-2h2m-2 2h1.5M9 14v4m2.5-4 1.245 4h.542l1.213-4"
      />
    </svg>
  );
};
export default LiveStreaming_01;
