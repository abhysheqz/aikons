import React from "react";
const ElectricHome_01: React.FC<
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
        d="M13.65 1.747a2.75 2.75 0 0 0-3.3 0L3.557 6.842l-.013.01L1.55 8.347a.75.75 0 0 0 .9 1.2l.8-.6v9.5A2.75 2.75 0 0 0 6 21.197h5.25v-3.5h-.215a1.75 1.75 0 0 1-1.456-.779l-1.535-2.303a1.75 1.75 0 0 1-.294-.97v-2.698a.75.75 0 0 1 .75-.75h.75v-1.25a.75.75 0 1 1 1.5 0v1.25h2.5v-1.25a.75.75 0 0 1 1.5 0v1.25h.75a.75.75 0 0 1 .75.75v2.698c0 .345-.102.683-.294.97l-1.535 2.303a1.75 1.75 0 0 1-1.456.78h-.215v3.499H18a2.75 2.75 0 0 0 2.75-2.75v-9.5l.8.6a.75.75 0 1 0 .9-1.2l-1.994-1.495-.013-.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricHome_01;
