import React from "react";
const Aids: React.FC<
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
        strokeWidth={1.5}
        d="M6.8 4 20 16l-4 6-8.806-11.833C5.888 8.42 5.766 6.949 6.29 4.892 6.882 2.567 9.927 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2c2.072 0 5.117.567 5.71 2.892.524 2.057.402 3.528-.904 5.275L15.436 12M17.2 4 12 8.841m0 7.755L8 22l-4-6 4.606-4"
      />
    </svg>
  );
};
export default Aids;
