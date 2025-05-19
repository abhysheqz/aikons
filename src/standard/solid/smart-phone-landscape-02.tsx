import React from "react";
const SmartPhoneLandscape_02: React.FC<
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
        d="M1.25 16.837c0 1.335 1.094 2.417 2.443 2.417h16.614c1.35 0 2.443-1.082 2.443-2.417V7.171c0-1.335-1.094-2.417-2.443-2.417H3.693c-1.35 0-2.443 1.082-2.443 2.417zM19 6.687v10.634H3.692a.486.486 0 0 1-.489-.484v-2.302l.437-.216a.97.97 0 0 0 .54-.865v-2.9c0-.366-.209-.701-.54-.865l-.437-.216V7.171c0-.267.219-.484.489-.484z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhoneLandscape_02;
