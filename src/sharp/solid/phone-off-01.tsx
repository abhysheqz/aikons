import React from "react";
const PhoneOff_01: React.FC<
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
        d="M2.664 1.25 22.75 21.336l-1.414 1.414L1.25 2.664z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.75 4.75v18h14.5v-3.5l-1.933-1.933V19H6.684V6.684zM17.317 13.781V3.203H14.53l-.483.977H9.953l-.484-.977H6.74L4.786 1.25H19.25v14.465z"
      />
    </svg>
  );
};
export default PhoneOff_01;
