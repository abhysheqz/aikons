import React from "react";
const ValidationApproval: React.FC<
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
        d="M1.25 2.227c0-.54.435-.977.97-.977h14.56c.535 0 .97.438.97.977v6.841h-1.941V3.205H3.19v17.59h4.853v1.955H2.221a.974.974 0 0 1-.971-.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.737 17.798A.8.8 0 0 1 15 17.75h3q.137 0 .264.048l4.486 1.682V22a.75.75 0 0 1-.75.75H11a.75.75 0 0 1-.75-.75v-2.52z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.73 6.684 8.223 11.49 5.747 8.659l1.505-1.317L8.275 8.51l2.995-3.195zM11 15H6v-2h5zm-1 3H6v-2h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 14.5a2.5 2.5 0 1 1 4.956.47c-.071.373-.207.73-.342 1.087a10 10 0 0 0-.256.73A1.8 1.8 0 0 0 18 16.75h-3q-.18 0-.358.037c-.072-.246-.164-.488-.256-.73-.135-.357-.271-.714-.342-1.087A2.5 2.5 0 0 1 14 14.5"
      />
    </svg>
  );
};
export default ValidationApproval;
