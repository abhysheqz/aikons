import React from "react";
const EditUser_02: React.FC<
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
        d="M6.695 13.098A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2 8 8 0 0 0-.55.148"
      />
      <path
        fill="currentColor"
        d="M19.97 6.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-.348.198l-2 .5a.75.75 0 0 1-.91-.91l.5-2a.75.75 0 0 1 .198-.348z"
      />
    </svg>
  );
};
export default EditUser_02;
