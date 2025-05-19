import React from "react";
const SecuredNetwork: React.FC<
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
        d="M7.5 5.77c0-2.49 2.01-4.52 4.5-4.52s4.5 2.03 4.5 4.52v2.48h-2V5.77A2.51 2.51 0 0 0 12 3.25a2.51 2.51 0 0 0-2.5 2.52v2.48h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M13 12h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 20.75v-2h2v2h7v2H4v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecuredNetwork;
