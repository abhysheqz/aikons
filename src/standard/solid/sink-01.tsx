import React from "react";
const Sink_01: React.FC<
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
        d="M14.5 3a.5.5 0 0 0-.5.5v2.75h4c.932 0 1.824.782 1.672 1.853a7.751 7.751 0 0 1-15.344 0C4.175 7.033 5.067 6.25 6 6.25h3V5H8a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v1.25h1V3.5a2.5 2.5 0 0 1 5 0V4a1 1 0 1 1-2 0v-.5a.5.5 0 0 0-.5-.5M7 22a1 1 0 0 1 1-1h1.189l-.311-5.29c.975.35 2.026.54 3.121.54s2.147-.19 3.121-.539L14.81 21H16a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sink_01;
