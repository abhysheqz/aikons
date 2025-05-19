import React from "react";
const CloudAngledRainZap: React.FC<
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
        d="M9.868 13.996a1 1 0 1 0-1.736-.992l-2 3.5A1 1 0 0 0 7 18h1.277l-1.145 2.004a1 1 0 0 0 1.736.992l2-3.5A1 1 0 0 0 10 16H8.723zM14.395 17.947a1 1 0 1 0-1.79-.894l-1.5 3a1 1 0 1 0 1.79.894zM17.395 17.947a1 1 0 1 0-1.79-.894l-1.5 3a1 1 0 1 0 1.79.894z"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 .497 10.299A2.5 2.5 0 0 0 15 15.499a2.5 2.5 0 0 0-3 0 2.5 2.5 0 0 0-.852-.72l.023-.039a2.5 2.5 0 0 0-4.342-2.48l-2 3.5a2.5 2.5 0 0 0 .07 2.594A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudAngledRainZap;
