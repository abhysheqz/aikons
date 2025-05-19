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
        d="M9.5 17h6v-2h-6zM4.5 12V2h2v10zm3-2V4h2v6zm-6-1V5h2v4zm9 0V5h2v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 5h7a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-7h2v6h16V7h-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeechToText;
