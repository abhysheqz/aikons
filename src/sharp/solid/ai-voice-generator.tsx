import React from "react";
const AiVoiceGenerator: React.FC<
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
        d="M1.25 2.25h21.5v13.47l-2.282-.689-1.064-3.531h-2.308l-1.064 3.531-2.383.719H1.25zm5.5 8.5v-3.5h-1.5v3.5zm9-4.5v5.5h-1.5v-5.5zm-3 4v-2.5h-1.5v2.5zm6-2.5v2.5h-1.5v-2.5zm-9 4v-5.5h-1.5v5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.025 12.75h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
    </svg>
  );
};
export default AiVoiceGenerator;
