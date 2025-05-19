import React from "react";
const ArrowReloadVertical: React.FC<
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
        d="m2 6.502 4.5-4.5 4.5 4.5-1.414 1.414L7.5 5.831v14.171H12v2H6.5a1 1 0 0 1-1-1V5.831L3.414 7.916zM12 2h5.5a1 1 0 0 1 1 1v15.174l2.086-2.086L22 17.502l-4.5 4.5-4.5-4.5 1.415-1.414 2.085 2.086V4H12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowReloadVertical;
