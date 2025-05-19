import React from "react";
const MedalThirdPlace: React.FC<
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
        d="M9.78 8.597 6.445 1.25H4.25l3.728 8.217a7.25 7.25 0 1 0 8.044 0L19.75 1.25h-2.197l-3.332 7.346a7 7 0 0 0-.802-.207L10.45 1.25H8.283l2.93 7.042a7.2 7.2 0 0 0-1.434.305m3.128-4.308L14.036 7l2.155-5.75h-2.137zM9.75 14c0-.966.784-1.75 1.75-1.75h1c.967 0 1.75.784 1.75 1.75v.5c0 .372-.116.716-.313 1 .197.284.313.628.313 1v.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 17v-.5h1.5v.5c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25H12v-1.5h.5a.25.25 0 0 0 .25-.25V14a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25v.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedalThirdPlace;
