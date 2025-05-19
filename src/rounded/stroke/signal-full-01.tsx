import React from "react";
const SignalFull_01: React.FC<
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
        strokeWidth={1.5}
        d="M5 10v9M5.808 9.281c-.373.48-.56.719-.808.719-.249 0-.435-.24-.808-.719l-.746-.958c-1.073-1.378-1.61-2.068-1.402-2.635q.033-.086.078-.167C2.423 5 3.282 5 5 5s2.577 0 2.878.521q.045.081.078.167c.208.567-.329 1.257-1.402 2.635zM9 14v5M13 11v8M17 10v9M21 7v12"
      />
    </svg>
  );
};
export default SignalFull_01;
