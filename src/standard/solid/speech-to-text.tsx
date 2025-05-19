import React from "react";
const SpeechToText: React.FC<
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
        d="M9 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M5 1a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m3 1.778a1 1 0 0 1 1 1v4.444a1 1 0 1 1-2 0V3.778a1 1 0 0 1 1-1m-6 .889a1 1 0 0 1 1 1v2.666a1 1 0 1 1-2 0V4.667a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 1v2.666a1 1 0 1 1-2 0V4.667a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 4a1 1 0 0 1 1-1H19a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5.5a1 1 0 1 1 2 0V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeechToText;
