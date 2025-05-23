import React from "react";
const FunctionOfX: React.FC<
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
        d="M14.5 14h.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553h.382m.5-4a2 2 0 0 0-1.6.8l-1.8 2.4a2 2 0 0 1-1.6.8M2 18.222c.189.85.57 1.778 1.562 1.778 1.72 0 2.149-1.778 3.438-8s1.719-8 3.438-8c.993 0 1.373.928 1.562 1.778M4.5 10h5.938M21 12c1.38 3.253 1.285 4.98 0 8M12 12c-1.38 3.253-1.285 4.98 0 8"
      />
    </svg>
  );
};
export default FunctionOfX;
