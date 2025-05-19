import React from "react";
const StudyLamp: React.FC<
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
        d="M6 20.75h9v2H6zM12.836 1.33a.75.75 0 0 0-1.01.343L10.352 4.71a.75.75 0 0 0 .344 1l2.701 1.329 1.897 5.216a.75.75 0 0 0 1.359.112l1.195-2.123c1.283.6 2.823.114 3.537-1.143a2.81 2.81 0 0 0-.824-3.684l1.1-2.066a.75.75 0 0 0-.73-1.099l-5.287.48zm5.754 7.6 1.238-2.181c.435.396.56 1.068.251 1.613a1.24 1.24 0 0 1-1.49.569"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.567 7.324-8 5.5-1.134-1.648 8-5.5zM10.186 22.581l-5-7 1.627-1.162 5 7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StudyLamp;
