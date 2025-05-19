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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 16.991h-6M8 3.999v5.996M5 2v9.994M2 4.998v3.998m9-3.998v3.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.004 7.001H21.9a.1.1 0 0 1 .1.1v14.8a.1.1 0 0 1-.1.099H4.1a.1.1 0 0 1-.1-.1v-7.907"
      />
    </svg>
  );
};
export default SpeechToText;
