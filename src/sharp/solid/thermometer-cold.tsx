import React from "react";
const ThermometerCold: React.FC<
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
        d="M17.5 22a4 4 0 0 0 2-7.465V4a2 2 0 1 0-4 0v10.535a4 4 0 0 0 2 7.465"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.046 6.254V5h2v1.254l.34-.339 1.41 1.42-1.75 1.738V10.5h1.75v2h-1.75v1.428l1.75 1.737-1.41 1.42-.34-.339V18h-2v-1.254l-.341.339-1.41-1.42 1.75-1.737V12.5h-1.45L4.84 14.24l-1.409-1.418.324-.322H2.5v-2h1.256l-.324-.322 1.41-1.419L6.593 10.5h1.452V9.073l-1.75-1.738 1.409-1.42z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThermometerCold;
