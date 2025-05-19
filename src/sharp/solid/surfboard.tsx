import React from "react";
const Surfboard: React.FC<
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
        d="M23 1.751V1h-.751c-3.611 0-9.024 1.245-12.502 4.725C8.33 7.143 6.877 9.055 5.548 11c-1.563 2.303-3.055 4.798-3.987 6.4L1 18.366l4.055.58.58 4.055.964-.562c2.993-1.743 8.531-5.055 11.666-8.192C21.74 10.768 23 5.364 23 1.751M20.575 7.38c.544-1.684.829-3.382.903-4.857-3.33.166-7.8 1.395-10.667 4.265-.956.956-1.936 2.159-2.885 3.452 2-.411 3.87-.268 5.507-.143.4.03.787.06 1.158.08 1.287.07 2.368.033 3.326-.335.93-.357 1.818-1.057 2.645-2.47zM7.738 17.28l2-2-1.06-1.06-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Surfboard;
