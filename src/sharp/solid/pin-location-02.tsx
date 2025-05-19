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
        d="M8.979 19.014c.725.435 1.79.736 3.021.736s2.296-.301 3.021-.736c.745-.447.979-.925.979-1.264h2c0 1.318-.885 2.34-1.95 2.979-1.085.65-2.52 1.021-4.05 1.021s-2.965-.37-4.05-1.021C6.885 20.089 6 19.068 6 17.75h2c0 .34.234.817.979 1.264"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2.25a4.75 4.75 0 0 0-1 9.395V18h2v-6.355a4.752 4.752 0 0 0-1-9.395"
      />
    </svg>
  );
};
export default PinLocation_02;
