import React from "react";
const Car_04: React.FC<
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
        d="M8 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 11.5h1M9 4.5C8.5 5 7 6.6 7 9c2-.167 6.5-.5 10.5 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 17.5H2c0-1.865.435-3.187 1-4.117M8 17.5h8m4 0h2c0-2.342-.343-3.998-.627-4.969-.2-.68-.73-1.184-1.383-1.464L17.5 10c-.891-2.228-3.635-4.323-5.048-5.225a1.8 1.8 0 0 0-.983-.275h-4.64c-.531 0-1.048.204-1.387.613-1.99 2.404-2.43 5.535-2.441 8.27M5 11.5c-.534.267-1.352.819-2 1.883"
      />
    </svg>
  );
};
export default Car_04;
