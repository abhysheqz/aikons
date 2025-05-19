import React from "react";
const MedalFirstPlace: React.FC<
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
        d="m4.25 1.25 3.728 8.217a7.25 7.25 0 1 0 8.044 0L19.75 1.25h-2.197l-3.332 7.347a7 7 0 0 0-.802-.208L10.45 1.25H8.283l2.93 7.042a7.2 7.2 0 0 0-1.434.305L6.446 1.25zm8.5 11h-2.5v1.5h1v3.5h-1v1.5h3.5v-1.5h-1zM14.036 7 12.908 4.29l1.146-3.039h2.137z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedalFirstPlace;
