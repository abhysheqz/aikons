import React from "react";
const TextClear: React.FC<
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
        d="M6.557 5h4.162L7.212 19H4.999a1 1 0 1 0 0 2h5.987a1 1 0 1 0 0-2H9.274L12.78 5H17.5l-.19.758a1 1 0 1 0 1.942.484l.188-.758A2 2 0 0 0 17.502 3H6.557a2.996 2.996 0 0 0-2.906 2.273l-.121.485a1 1 0 0 0 1.94.484l.122-.485A.996.996 0 0 1 6.557 5m8.65 9.293a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414L17 18.914l1.793 1.793a1 1 0 0 0 1.414-1.414L18.414 17.5l1.793-1.793a1 1 0 0 0-1.414-1.414L17 16.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextClear;
