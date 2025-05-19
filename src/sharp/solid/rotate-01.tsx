import React from "react";
const Rotate_01: React.FC<
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
        d="M12 3.205A8.795 8.795 0 1 0 20.796 12h1.954c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c2.6 0 4.983.923 6.842 2.458v-1.48h1.954v3.908a.977.977 0 0 1-1.758.587A8.78 8.78 0 0 0 12 3.205"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rotate_01;
