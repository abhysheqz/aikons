import React from "react";
const CloudAngledRain: React.FC<
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
        d="M8.447 14.106a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m4.5 0a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m4.5 0a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m-8 4a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m4.5 0a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1-.453 10.439 2.5 2.5 0 0 0 .442-.624l1-2a2.5 2.5 0 0 0-4.472-2.236l-.014.028a2.5 2.5 0 0 0-4.486-.028l-.014.028a2.5 2.5 0 0 0-4.486-.028l-1 2a2.5 2.5 0 0 0 .134 2.472A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudAngledRain;
