import React from "react";
const FingerAccess: React.FC<
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
        d="M12 7a5 5 0 0 0-5 5c0 3.037.889 5.01 2.78 7.375l.625.781-1.561 1.25-.625-.781C6.111 17.99 5 15.59 5 12a7 7 0 1 1 14 0h-2a5 5 0 0 0-5-5"
      />
      <path
        fill="currentColor"
        d="M12 4a8 8 0 0 0-7.802 9.779l.222.975-1.95.443-.222-.976A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a4 4 0 0 1-8 0 2 2 0 1 0-4 0c0 .719.107 1.928.83 3.357.722 1.428 2.09 3.134 4.707 4.8l.239.151L14.709 22l-.246-.156c-2.883-1.835-4.515-3.8-5.418-5.584C8.143 14.478 8 12.938 8 12a4 4 0 1 1 8 0 2 2 0 1 0 4 0 8 8 0 0 0-8-8"
      />
      <path
        fill="currentColor"
        d="m12.896 10.906.1.995c.216 2.16 1.401 3.694 2.593 4.715a10 10 0 0 0 1.61 1.12c.215.12.556.282.675.337l.927.37-.743 1.858-.929-.372-.02-.01a18 18 0 0 1-.884-.435c-.52-.29-1.22-.733-1.938-1.349-1.433-1.229-2.997-3.195-3.281-6.035l-.1-.995z"
      />
    </svg>
  );
};
export default FingerAccess;
