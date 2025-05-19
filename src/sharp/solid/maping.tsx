import React from "react";
const Maping: React.FC<
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
        d="M7.25 2.297 1.658 5.164a.75.75 0 0 0-.408.668V20a.75.75 0 0 0 .987.712l5.013-1.668v-2.762h1.5v2.852l5.5 2.36v-2.212h1.5v2.468H22a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75h-6.25v1.468h-1.5V4.611l-5.5-2.36v1.216h-1.5zm1.5 5.172V5.032h-1.5v2.437zm0 3.75V8.782h-1.5v2.437zm0 3.75v-2.437h-1.5v2.437zm7-6.937v2.437h-1.5V8.032zm0 3.75v2.437h-1.5v-2.437zm0 3.75v2.437h-1.5v-2.437z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maping;
