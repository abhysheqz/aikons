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
        d="M12 6a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1M8 8.222a1 1 0 0 1 1 1v5.556a1 1 0 1 1-2 0V9.222a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v5.556a1 1 0 0 1-2 0V9.222a1 1 0 0 1 1-1M1.5 4.5a3 3 0 0 1 3-3H8a1 1 0 0 1 0 2H4.5a1 1 0 0 0-1 1V8a1 1 0 0 1-2 0zm13.5-2a1 1 0 0 1 1-1h3.5a3 3 0 0 1 3 3V8a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1M2.5 15a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1H8a1 1 0 1 1 0 2H4.5a3 3 0 0 1-3-3V16a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H16a1 1 0 1 1 0-2h3.5a1 1 0 0 0 1-1V16a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VoiceId;
