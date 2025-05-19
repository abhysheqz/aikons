import React from "react";
const LeavingGeoFence: React.FC<
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
        d="m12 2 4.707 4.707-1.414 1.414L13 5.828v11.586h-2V5.828L8.707 8.121 7.293 6.707z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.451 15.892C4.267 16.492 4 17.044 4 17.316c0 .153.072.395.403.715.333.323.869.66 1.612.964C7.496 19.602 9.612 20 12 20s4.504-.398 5.985-1.005c.743-.304 1.279-.641 1.612-.964.331-.32.403-.562.403-.715 0-.272-.267-.825-1.451-1.424l.902-1.785c1.317.666 2.549 1.725 2.549 3.209 0 .863-.432 1.59-1.012 2.152-.577.559-1.36 1.015-2.245 1.378C16.967 21.573 14.583 22 12 22c-2.582 0-4.967-.427-6.743-1.154-.885-.363-1.668-.82-2.245-1.378C2.432 18.907 2 18.18 2 17.316c0-1.484 1.232-2.543 2.549-3.209z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeavingGeoFence;
