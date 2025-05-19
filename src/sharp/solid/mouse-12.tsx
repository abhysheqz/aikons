import React from "react";
const Mouse_12: React.FC<
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
        d="M12.75 4.023V1.5h-1.5v2.523a12 12 0 0 1 1.5 0M12.75 4.023V7h.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 10.5 7h.75V4.023c-2.583.161-4.357 1.17-5.47 2.805-1.179 1.73-1.53 4.042-1.53 6.422s.351 4.692 1.53 6.422C6.998 21.461 9.007 22.5 12 22.5s5.002-1.04 6.22-2.828c1.178-1.73 1.53-4.042 1.53-6.422s-.352-4.692-1.53-6.422c-1.113-1.635-2.887-2.644-5.47-2.805"
      />
      <path fill="currentColor" d="M11.25 8.5V11h1.5V8.5z" />
    </svg>
  );
};
export default Mouse_12;
