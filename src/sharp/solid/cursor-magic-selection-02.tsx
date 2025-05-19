import React from "react";
const CursorMagicSelection_02: React.FC<
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
        d="M11.5 3a6.77 6.77 0 0 0 4 4 6.77 6.77 0 0 0-4 4 6.77 6.77 0 0 0-4-4 6.77 6.77 0 0 0 4-4"
      />
      <path
        fill="currentColor"
        d="M8.094 5.022 2.25 2.75l7.583 19.5 3.25-8.667 8.667-3.25-5.398-2.099a1.5 1.5 0 0 1-.331.173 5.27 5.27 0 0 0-3.114 3.114 1.5 1.5 0 0 1-2.814 0A5.27 5.27 0 0 0 6.98 8.407a1.5 1.5 0 0 1 0-2.814c.397-.146.77-.339 1.115-.57M15.392 1.75a2.54 2.54 0 0 0 1.5 1.5 2.54 2.54 0 0 0-1.5 1.5 2.54 2.54 0 0 0-1.5-1.5 2.54 2.54 0 0 0 1.5-1.5"
      />
    </svg>
  );
};
export default CursorMagicSelection_02;
