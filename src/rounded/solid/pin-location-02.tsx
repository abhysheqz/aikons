import React from "react";
const PinLocation_02: React.FC<
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
        d="M12 1.25a4.75 4.75 0 0 0-1.236 9.338.314.314 0 0 1 .236.3v6.862a1 1 0 1 0 2 0v-6.863c0-.141.1-.263.236-.3A4.752 4.752 0 0 0 12 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 19.71a1 1 0 0 0-2 .04c0 .64.328 1.148.706 1.505.375.355.865.629 1.387.838 1.05.42 2.432.657 3.907.657s2.857-.237 3.907-.657c.522-.21 1.012-.483 1.387-.838.378-.357.706-.865.706-1.505a1 1 0 0 0-2-.04.5.5 0 0 1-.08.092c-.13.123-.373.28-.756.434-.76.304-1.878.514-3.164.514s-2.404-.21-3.164-.514c-.383-.153-.625-.31-.756-.434A.5.5 0 0 1 8 19.71"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinLocation_02;
