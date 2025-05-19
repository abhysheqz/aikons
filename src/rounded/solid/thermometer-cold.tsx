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
        d="M18 22a4 4 0 0 0 2.902-6.752c-.506-.535-.76-.802-.83-.98-.072-.179-.072-.415-.072-.886V4a2 2 0 1 0-4 0v9.382c0 .472 0 .707-.071.886-.071.178-.325.445-.831.98A4 4 0 0 0 18 22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.545 4a1 1 0 0 1 1 1v1.254l.341-.339a1 1 0 1 1 1.41 1.42l-1.75 1.738V10.5H12a1 1 0 1 1 0 2h-1.454v1.428l1.75 1.737a1 1 0 0 1-1.41 1.42l-.34-.339V18a1 1 0 0 1-2 0v-1.254l-.341.339a1 1 0 0 1-1.41-1.42l1.75-1.737V12.5H7.094l-1.753 1.74a1 1 0 1 1-1.41-1.418l.325-.322H3a1 1 0 1 1 0-2h1.256l-.324-.322A1 1 0 1 1 5.34 8.76L7.094 10.5h1.451V9.073l-1.75-1.738a1 1 0 0 1 1.41-1.42l.34.339V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThermometerCold;
