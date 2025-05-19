import React from "react";
const AiVideo: React.FC<
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
        d="M1.25 2.25h15.323l-.089.234L14 3.428v3.144l2.484.944.944 2.484h3.144l.944-2.484.234-.089V22.75H1.25zM16 12.5l-7.5-4v8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.299 1.25H19.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V5.7l-.695.258c-.976.36-1.24.476-1.43.665s-.305.455-.666 1.43l-.258.696H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43s-.454-.305-1.43-.666L15.25 5.7V4.3l.695-.258c.976-.36 1.24-.476 1.43-.665s.305-.455.666-1.43z"
      />
    </svg>
  );
};
export default AiVideo;
