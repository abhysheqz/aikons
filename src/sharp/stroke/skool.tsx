import React from "react";
const Skool: React.FC<
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
        d="M15 3h-3v17h3v-5.5h.906a1 1 0 0 1 .878.521l2.432 4.458a1 1 0 0 0 .878.521H23v-.5L19.216 13 23 8.4V8h-3a1 1 0 0 0-.8.4l-2.4 3.2a1 1 0 0 1-.8.4h-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.5 11c.406-1.455 3.167-.5 4 0l1.5-1v-.5S8.737 8 6 8c-2.065 0-4.646.419-4.646 3.919s6.354 2.775 5.355 5.079c-.574 1.323-3.551.111-4.551-.555L1 18.5v.218c.833.5 2.9 1.282 4.5 1.282 1.792 0 4.5-1.087 4.5-4.279 0-3.191-6.01-2.886-5.5-4.72Z"
      />
    </svg>
  );
};
export default Skool;
