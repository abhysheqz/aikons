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
        strokeWidth={1.5}
        d="M9.144 2.5H2.5v6.644M14.856 2.5H21.5v6.644M14.856 21.5H21.5v-6.644M9.144 21.5H2.5v-6.644"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7v10M8 9v6m8 0V9"
      />
    </svg>
  );
};
export default VoiceId;
