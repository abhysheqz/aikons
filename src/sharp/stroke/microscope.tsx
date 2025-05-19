import React from "react";
const Microscope: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m15.765 15.5 2.186-1.272m-6.086-3.502 1.764 3.08L18 11.262l-4.29-7.49a2.513 2.513 0 0 0-3.448-.93 2.555 2.555 0 0 0-.923 3.474l1.04 1.818M9.5 18.5a4.5 4.5 0 1 1 0-9m8.5 9h-5.16M20 21.5h-6.5m-9.5 0h5m4.5 0-1.272-3.816a1 1 0 0 0-.949-.684h-.058a1 1 0 0 0-.949.684L9 21.5m4.5 0H9"
      />
    </svg>
  );
};
export default Microscope;
