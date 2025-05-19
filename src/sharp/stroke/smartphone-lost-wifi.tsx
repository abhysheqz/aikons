import React from "react";
const SmartphoneLostWifi: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6H4v16h11v-8.504"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 19h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 3.847C18.564 2.68 16.849 2 15.007 2q-.256 0-.507.017M10 3.858a8.7 8.7 0 0 1 1.5-.99M12.282 7a5.15 5.15 0 0 1 2.467-.792M11 2l7 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10h.006"
      />
    </svg>
  );
};
export default SmartphoneLostWifi;
