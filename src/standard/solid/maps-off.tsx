import React from "react";
const MapsOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.052 3.636 2.217 5.053a1.75 1.75 0 0 0-.967 1.565v11.995a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232V5.834zM8.75 7.334v11.804l5.5 2.357v-8.66zM14.25 10.713l-5.5-5.5V2.506l5.5 2.357zM15.75 14.334v7.416H21c.59 0 1.11-.291 1.428-.738zM22.75 19.213l-7-7V5.25H21c.966 0 1.75.784 1.75 1.75zM7.25 3.713l-.784-.784.784-.392z"
      />
    </svg>
  );
};
export default MapsOff;
