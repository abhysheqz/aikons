import React from "react";
const MilkBottle: React.FC<
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
        d="M16.26 5.224a2.19 2.19 0 0 0 .854-1.724c0-1.303-1.132-2.25-2.387-2.25H9.273c-1.255 0-2.387.947-2.387 2.25 0 .7.333 1.303.832 1.707-1.453 2.739-2.468 5.24-2.468 8.57V22c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-8.223c0-3.329-1.038-5.823-2.49-8.553M8.386 3.5c0-.354.334-.75.886-.75h5.454c.553 0 .887.396.887.75 0 .277-.193.568-.547.693l-1.58.057.026 1.5 1.307-.039c1.475 2.749 2.43 5.019 2.43 8.066v.262L6.943 11.463c.346-1.992 1.133-3.75 2.208-5.756l1.334.043.027-1.5-1.595-.063c-.345-.128-.531-.414-.531-.687"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MilkBottle;
