import React from "react";
const Tap_01: React.FC<
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
        d="M8.558 6.74a2.365 2.365 0 0 1 4.73 0v3.991c1.624.075 3.88.602 5.642 2.325.86.84.904 2.065.752 3.048-.157 1.018-.557 2.021-.885 2.688-.097.195-.211.395-.316.576-.105.182-.212.37-.3.54-.188.365-.275.634-.275.842 0 .273 0 .63-.076.883a1.75 1.75 0 0 1-1.166 1.166c-.253.077-.538.077-.812.076l-5.582-.011c-.588 0-1.07-.411-1.246-.617-.156-.186-.254-.43-.326-.626a28 28 0 0 1-.313-.94c-.088-.24-.246-.456-.775-1.135l-2.867-3.68a2.23 2.23 0 0 1-.006-2.79 2.223 2.223 0 0 1 3.187-.3l.002.002.632.545z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.125a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_01;
