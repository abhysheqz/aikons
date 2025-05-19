import React from "react";
const Cabinet_01: React.FC<
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
        d="m6 18-1 3m13-3 1 3M16 18H8c-2.828 0-4.243 0-5.121-.941C2 16.117 2 14.602 2 11.57V9.43c0-3.03 0-4.546.879-5.488C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.941C22 4.883 22 6.398 22 9.43v2.142c0 3.03 0 4.546-.879 5.488C20.243 18 18.828 18 16 18M2.5 14h19M12 3v11M9 9V8M15 9V8"
      />
    </svg>
  );
};
export default Cabinet_01;
