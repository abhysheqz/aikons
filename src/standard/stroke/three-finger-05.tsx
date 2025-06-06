import React from "react";
const ThreeFinger_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.81 5.71a1.5 1.5 0 0 0-2.954-.522L8 15l-2.111-2.663a1.692 1.692 0 0 0-2.55 2.212l2.97 5.398A3 3 0 0 0 8.939 21.5h7.368a3 3 0 0 0 2.93-2.356l1.743-7.932a1.5 1.5 0 1 0-2.955-.521M12.81 5.709l.347-1.97a1.5 1.5 0 1 1 2.955.522l-.347 1.97m-2.955-.522-.781 4.432m3.736-3.91-.782 4.431m.781-4.432a1.5 1.5 0 1 1 2.955.521l-.695 3.94m0 0-.087.492"
      />
    </svg>
  );
};
export default ThreeFinger_05;
