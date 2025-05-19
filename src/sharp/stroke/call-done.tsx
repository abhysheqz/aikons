import React from "react";
const CallDone: React.FC<
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
        strokeWidth={1.5}
        d="m12 9 2 2 6-6M3.777 11.981l4.215-3.969-2.986-6.008A.01.01 0 0 0 4.991 2c-2.166 1.716-3.193 3.554-2.96 5.168.303 2.105 1.498 5.424 4.634 8.702 1.129 1.352 3.12 3.149 5.425 4.392m0 0c2.414 1.302 5.175 2.544 7.512 1.077.515-.323 1.914-1.576 2.398-2.295a.01.01 0 0 0-.004-.014l-5.99-3.011z"
      />
    </svg>
  );
};
export default CallDone;
