import React from "react";
const VoiceId: React.FC<
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
        d="M1.5 1.5h7.644v2H3.5v5.644h-2zm19 2h-5.644v-2H22.5v7.644h-2zm2 11.356V22.5h-7.644v-2H20.5v-5.644zM3.5 20.5v-5.644h-2V22.5h7.644v-2zM11 17V7h2v10zm-4-2V9h2v6zm10-6v6h-2V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VoiceId;
