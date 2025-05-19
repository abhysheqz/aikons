import React from "react";
const CallLocked: React.FC<
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
        d="M5.877 1.553a1 1 0 0 0-1.602-.26L1.861 3.707a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.658 17.103 17.102a2.88 2.88 0 0 0 2.17-.858l2.413-2.414a1 1 0 0 0-.26-1.601l-6-3a1 1 0 0 0-1.154.187l-3.826 3.826a16.08 16.08 0 0 1-6.586-6.586l3.826-3.826a1 1 0 0 0 .188-1.154zM16.232 4a1.25 1.25 0 0 1 2.5 0v.75h-2.5zm4 0v.75h.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V5.5a.75.75 0 0 1 .75-.75h.75V4a2.75 2.75 0 1 1 5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallLocked;
