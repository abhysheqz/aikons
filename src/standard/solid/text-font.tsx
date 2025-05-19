import React from "react";
const TextFont: React.FC<
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
        d="M7 4a1 1 0 0 1 .942.664l5 14a1 1 0 1 1-1.883.672L9.509 15H4.492l-1.549 4.336a1 1 0 1 1-1.883-.672l5-14A1 1 0 0 1 7 4m-1.795 9h3.59L7 7.973zM18.069 11c-.646 0-1.249.323-1.607.86l-.13.195a1 1 0 0 1-1.664-1.11l.13-.194A3.931 3.931 0 0 1 22 12.93V18.5a1 1 0 0 1-1.791.612 5 5 0 0 1-.391.264l-.152.09A3.74 3.74 0 0 1 17.74 20h-.302C15.539 20 14 18.46 14 16.561A3.56 3.56 0 0 1 17.561 13H20v-.069A1.93 1.93 0 0 0 18.069 11M20 15h-2.439c-.862 0-1.561.699-1.561 1.561 0 .795.644 1.439 1.439 1.439h.302c.315 0 .625-.086.896-.248l.152-.091A2.5 2.5 0 0 0 20 15.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextFont;
