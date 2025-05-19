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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7v10M8 9.222v5.556m8 0V9.222M8 2.5H4.5a2 2 0 0 0-2 2V8M16 2.5h3.5a2 2 0 0 1 2 2V8M16 21.5h3.5a2 2 0 0 0 2-2V16M8 21.5H4.5a2 2 0 0 1-2-2V16"
      />
    </svg>
  );
};
export default VoiceId;
