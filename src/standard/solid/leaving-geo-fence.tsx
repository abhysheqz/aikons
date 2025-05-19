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
        d="M12 2a1 1 0 0 1 .707.293l3.5 3.5A1 1 0 0 1 15.5 7.5H13v9a1 1 0 0 1-2 0v-9H8.5a1 1 0 0 1-.707-1.707l3.5-3.5A1 1 0 0 1 12 2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.892 14.549a1 1 0 0 1-.44 1.343C4.266 16.492 4 17.044 4 17.316c0 .154.072.395.403.715.333.323.869.66 1.612.964C7.496 19.602 9.612 20 12 20s4.504-.398 5.985-1.005c.743-.304 1.279-.64 1.612-.964.331-.32.403-.561.403-.715 0-.271-.267-.824-1.451-1.424a1 1 0 0 1 .902-1.784c1.317.666 2.549 1.724 2.549 3.208 0 .863-.432 1.591-1.012 2.152-.577.559-1.36 1.016-2.245 1.378C16.967 21.573 14.583 22 12 22c-2.582 0-4.967-.427-6.743-1.154-.885-.362-1.668-.819-2.245-1.378C2.432 18.907 2 18.18 2 17.316c0-1.484 1.232-2.542 2.549-3.208a1 1 0 0 1 1.343.44"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeavingGeoFence;
