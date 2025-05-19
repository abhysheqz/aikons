import React from "react";
const PrayerRug_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.25 22.5v-1.75h2.5v1.75h1.5v-1.75h.25a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-.25V1.5h-1.5v1.75h-2.5V1.5h-1.5v1.75h-2.5V1.5h-1.5v1.75h-2.5V1.5h-1.5v1.75H5.5a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h.25v1.75h1.5v-1.75h2.5v1.75h1.5v-1.75h2.5v1.75zM11.358 7.685c-1.2.82-2.532 1.731-1.471 3.635.2.36.3.54.334.668.033.13.033.28.033.58V17h4.491l.002-4.432c0-.3 0-.45.033-.579.034-.128.134-.308.334-.667 1.06-1.904-.273-2.815-1.474-3.636q-.138-.094-.274-.188L12.5 7l-.868.497z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PrayerRug_02;
