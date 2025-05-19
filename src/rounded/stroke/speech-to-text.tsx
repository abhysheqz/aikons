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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 17h-6M8 4v4M5 2v8M2 5v2m9-2v2M4 13c.002 4.152.048 6.275 1.318 7.612C6.636 22 8.758 22 13 22h.45c3.807 0 5.71 0 6.973-1.135q.269-.242.499-.526C22 19.01 22 17.007 22 13s0-6.012-1.078-7.34a4.6 4.6 0 0 0-.5-.526C19.32 4.14 17.726 4.016 14.8 4H14"
      />
    </svg>
  );
};
export default SpeechToText;
