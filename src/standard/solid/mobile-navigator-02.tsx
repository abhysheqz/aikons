import React from "react";
const MobileNavigator_02: React.FC<
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
        d="M3.25 4A2.75 2.75 0 0 1 6 1.25h12A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20zM12 5.25c-2.374 0-4.25 1.991-4.25 4.386 0 1.31.576 2.28 1.244 3.074.307.366.649.71.965 1.03l.062.063c.342.345.656.666.927 1.002.527.652 1.565.676 2.112.02.276-.33.588-.648.926-.994l.017-.017c.336-.344.699-.715 1.024-1.112.659-.803 1.223-1.78 1.223-3.066 0-2.395-1.876-4.386-4.25-4.386M12 8a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3zm-1 10.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileNavigator_02;
