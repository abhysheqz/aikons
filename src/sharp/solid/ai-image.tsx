import React from "react";
const AiImage: React.FC<
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
        d="M9.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M18.299 1.25H19.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V5.7l-.695.258c-.976.36-1.24.476-1.43.665s-.305.455-.666 1.43l-.258.696H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43s-.454-.305-1.43-.666L15.25 5.7V4.3l.695-.258c.976-.36 1.24-.476 1.43-.665s.305-.455.666-1.43z"
      />
      <path
        fill="currentColor"
        d="M13.94 2.25H1.25v20.5h20.5V10.06h-1.952v4.238l-4.894-3.263-9.763 9.763H3.202V4.202h10.739z"
      />
    </svg>
  );
};
export default AiImage;
