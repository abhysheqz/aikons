import React from "react";
const BitcoinDown_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.975 9c-3.577 0-6.477 2.91-6.477 6.5s2.9 6.5 6.477 6.5 6.476-2.91 6.476-6.5-2.9-6.5-6.476-6.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.418 18.167v-5.334m1.557 0V11.5m0 8v-1.333M9.418 15.5h3.114m0 0c.516 0 .934.448.934 1v.667c0 .552-.418 1-.934 1H8.484m4.048-2.667c.516 0 .934-.448.934-1v-.667c0-.552-.418-1-.934-1H8.484"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.997 1.998 6.42 4.493a.1.1 0 0 0 .129-.012l3.344-3.42a.1.1 0 0 1 .138-.005L20 8.483m-4.059.047H20l-.08-4.035"
      />
    </svg>
  );
};
export default BitcoinDown_02;
