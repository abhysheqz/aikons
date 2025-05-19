import React from "react";
const Presentation_05: React.FC<
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
        d="M1.75 5A3.75 3.75 0 0 1 5.5 1.25h13A3.75 3.75 0 0 1 22.25 5v9a3.75 3.75 0 0 1-3.75 3.75h-13A3.75 3.75 0 0 1 1.75 14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.398 19h3.204c.378-.002.86-.004 1.293.212.431.216.719.603.944.907l.061.082.9 1.2a1 1 0 0 1-1.6 1.2l-.9-1.2a7 7 0 0 0-.305-.39l-.005-.001a7 7 0 0 0-.49-.01h-3c-.263 0-.395.002-.49.01h-.005l-.003.004c-.064.071-.144.177-.302.387l-.9 1.2a1 1 0 1 1-1.6-1.2l.9-1.2.061-.082c.225-.304.513-.691.945-.907s.914-.214 1.292-.212"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_05;
