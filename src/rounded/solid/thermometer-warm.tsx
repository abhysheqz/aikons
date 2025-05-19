import React from "react";
const ThermometerWarm: React.FC<
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
        d="M16.996 22a4 4 0 0 0 2.903-6.752c-.507-.535-.76-.802-.832-.98-.07-.179-.07-.415-.07-.886V4a2 2 0 1 0-4 0v9.382c0 .472 0 .707-.072.886-.071.178-.325.445-.831.98A4 4 0 0 0 16.996 22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M4.635 5.636a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414M2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m3.344 4.243a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414zM11 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.996 7.25a4.75 4.75 0 1 0 .283 9.492c.177-.01.266-.016.34-.072.072-.056.105-.155.17-.35.258-.783.678-1.537 1.217-2.105l.334-.354a.6.6 0 0 0 .134-.174c.02-.053.02-.11.02-.224l.002-5.169c0-.166 0-.25-.044-.321-.043-.072-.11-.107-.246-.179a4.7 4.7 0 0 0-2.21-.544"
      />
    </svg>
  );
};
export default ThermometerWarm;
