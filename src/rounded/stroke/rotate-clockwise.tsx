import React from "react";
const RotateClockwise: React.FC<
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
        d="M4 2v3.132c0 .294.367.427.555.201A9.97 9.97 0 0 1 12.005 2C17.525 2 22 6.477 22 12c0 3.958-2.299 7.38-5.633 9M11.735 22q.7 0 1.376-.092M2.265 8.667Q2.097 9.263 2 9.869m.035 3.67q.105.6.274 1.186m1.524 3.271q.358.531.774 1.019M7.43 21.36q.53.303 1.103.547"
      />
    </svg>
  );
};
export default RotateClockwise;
