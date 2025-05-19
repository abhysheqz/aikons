import React from "react";
const EnteringGeoFence: React.FC<
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
        d="m12 17.414 4.707-4.707-1.414-1.414L13 13.586V2h-2v11.586l-2.293-2.293-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.451 15.893C4.267 16.493 4 17.045 4 17.316c0 .154.072.396.403.716.333.323.869.66 1.612.964 1.481.606 3.597 1.005 5.985 1.005s4.504-.399 5.985-1.005c.743-.304 1.279-.641 1.612-.964.331-.32.403-.562.403-.716 0-.27-.267-.824-1.451-1.423l.902-1.785c1.317.666 2.549 1.725 2.549 3.208 0 .864-.432 1.592-1.012 2.153-.577.558-1.36 1.015-2.245 1.378C16.967 21.574 14.583 22 12 22c-2.582 0-4.967-.426-6.743-1.153-.885-.363-1.668-.82-2.245-1.378C2.432 18.908 2 18.179 2 17.316c0-1.483 1.232-2.542 2.549-3.208z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EnteringGeoFence;
