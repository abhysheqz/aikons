import React from "react";
const Bandage: React.FC<
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
        d="M8.168 1.536a.977.977 0 0 0-1.382 0l-5.25 5.25a.977.977 0 0 0 0 1.381l14.296 14.297a.977.977 0 0 0 1.382 0l5.25-5.25a.977.977 0 0 0 0-1.382zM8.133 12 12 8.133 15.867 12 12 15.868z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.408 13.16 1.47 16.098a.75.75 0 0 0 0 1.06L6.84 22.53a.75.75 0 0 0 1.06 0l2.939-2.938zM19.592 10.84l2.938-2.938a.75.75 0 0 0 0-1.061L17.158 1.47a.75.75 0 0 0-1.06 0L13.16 4.407z"
      />
    </svg>
  );
};
export default Bandage;
