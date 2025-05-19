import React from "react";
const TouchInteraction_04: React.FC<
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
        d="m8.979 21.114-3.527-4.899A1.592 1.592 0 1 1 8.04 14.36l1.362 1.905a.45.45 0 0 0 .815-.264V5.965a1.213 1.213 0 0 1 2.427 0V13a.45.45 0 1 0 .9 0v-2.452c0-.135.09-.254.221-.283l.079-.015c.277-.045.71-.004.747 0h.006c.243.02.454.044.655.1.118.034.191.146.191.268V13.5a.45.45 0 1 0 .9 0v-1.947c0-.144.103-.266.247-.28.126-.012.298-.023.504-.023.405 0 .786.108 1.114.295.087.05.137.145.137.245V14a.45.45 0 1 0 .9 0v-1.447a.3.3 0 0 1 .283-.3l.066-.003a2.25 2.25 0 0 1 2.25 2.25v4.45c0 1.849-1.548 3.3-3.397 3.3h-7.242a2.75 2.75 0 0 1-2.226-1.136"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TouchInteraction_04;
