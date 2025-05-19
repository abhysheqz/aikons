import React from "react";
const Book_04: React.FC<
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
        d="M2.75 5.158A3.9 3.9 0 0 1 6.645 1.25H21.25v1.955H6.645a1.95 1.95 0 0 0-1.948 1.954v.001a1.95 1.95 0 0 0 1.948 1.954h9.735v-.978H6.643V4.182h10.71c.538 0 .974.437.974.977v1.955h2.923V22.75H6.645a3.9 3.9 0 0 1-3.895-3.909zM8 12.25h8v1.5H8zm4 4H8v1.5h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_04;
