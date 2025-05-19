import React from "react";
const ThreeDScale: React.FC<
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
        d="m12.749 12.305 4.669 4.202-1.338 1.486-4.331-3.898-4.331 3.898-1.338-1.486 4.669-4.202V7.75h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.364 1.107a.75.75 0 0 1 .771 0l2.502 1.5A.75.75 0 0 1 15 3.25v3a.75.75 0 0 1-.364.643l-2.502 1.5a.75.75 0 0 1-.771 0l-2.5-1.5A.75.75 0 0 1 8.5 6.25l.001-3a.75.75 0 0 1 .364-.643zM3.864 15.107a.75.75 0 0 1 .771 0l2.502 1.5a.75.75 0 0 1 .364.643v3a.75.75 0 0 1-.364.643l-2.502 1.5a.75.75 0 0 1-.771 0l-2.5-1.5A.75.75 0 0 1 1 20.25l.001-3a.75.75 0 0 1 .364-.643zM18.864 15.107a.75.75 0 0 1 .771 0l2.502 1.5a.75.75 0 0 1 .364.643v3a.75.75 0 0 1-.364.643l-2.502 1.5a.75.75 0 0 1-.771 0l-2.5-1.5A.75.75 0 0 1 16 20.25l.001-3a.75.75 0 0 1 .364-.643z"
      />
    </svg>
  );
};
export default ThreeDScale;
