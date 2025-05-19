import React from "react";
const Factory_01: React.FC<
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
        d="M1 21a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75c0 5.915.985 9.794 2.42 12.665A.75.75 0 0 1 15 21.75H3a.75.75 0 0 1-.67-1.085C3.764 17.794 4.75 13.915 4.75 8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 3.732 1.392 6.478 3.207 8.293a1 1 0 0 1-1.414 1.414C17.282 19.696 15.76 16.78 15.53 13H13a1 1 0 0 1-1-1M20.083 2c1.11 0 2.042.684 2.73 1.646a1 1 0 1 1-1.626 1.163C20.704 4.135 20.301 4 20.083 4c-.217 0-.613.132-1.086.804l-.006.008c-.457.635-1.121 1.168-1.966 1.187-.862.02-1.541-.501-2.002-1.155-.481-.672-.882-.807-1.104-.807s-.624.135-1.106.81a1 1 0 0 1-1.626-1.164c.688-.963 1.62-1.646 2.732-1.646s2.044.683 2.733 1.646l.005.007c.175.25.29.3.323.31.029-.008.17-.055.385-.353C18.045 2.684 18.973 2 20.083 2M16.99 4h-.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory_01;
