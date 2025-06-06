import React from "react";
const CallMinus: React.FC<
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
        d="M20.5 7h-7M4 12l3.49-3.49a1 1 0 0 0 .188-1.155L5.62 3.241a1 1 0 0 0-1.602-.26L2.586 4.414A1.88 1.88 0 0 0 2.02 5.83c.419 8.73 7.422 15.732 16.152 16.151.53.026 1.039-.19 1.414-.566l1.433-1.433a1 1 0 0 0-.26-1.601l-4.114-2.058a1 1 0 0 0-1.154.188L12 20"
      />
    </svg>
  );
};
export default CallMinus;
