import React from "react";
const MaskLove: React.FC<
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
        d="M6 8.014c1.466-.615 3.61-1.003 6-1.003s4.534.388 6 1.003M3 14.032c1.639 2.734 4.577 4.653 8 4.968m7.06-8.98A8 8 0 0 1 18 9.017C18 5.694 18.895 3 20 3s2 2.694 2 6.017c0 .51-.013 1.012-.05 1.505M6 9.017c0 3.267-1.831 4.956-2.943 5.013a.09.09 0 0 1-.086-.05C2.157 12.525 2 10.81 2 9.018 2 5.694 2.895 3 4 3s2 2.694 2 6.017Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.586 13.331c-1.796-.951-3.086.451-3.086.451s-1.29-1.402-3.086-.451C12.238 14.483 12.082 18.997 17.5 21c5.418-2.003 5.262-6.517 3.086-7.669Z"
      />
    </svg>
  );
};
export default MaskLove;
