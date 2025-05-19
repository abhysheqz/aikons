import React from "react";
const Tired_02: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.189-2.531-.961-.93L8.52 7.46l2.04 1.974-2.023 2.087-1.077-1.044zm7.039-2.008 1.043 1.078-.96.93.977 1.009-1.077 1.044-2.022-2.087zm.252 8.36C15.11 14.455 13.673 13.5 12 13.5s-3.11.956-3.73 2.32c-.25.552-.375.828-.159 1.055.217.227.598.116 1.362-.105.723-.21 1.625-.4 2.527-.4s1.804.19 2.527.4c.764.221 1.145.332 1.362.105.216-.227.091-.503-.16-1.055"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tired_02;
