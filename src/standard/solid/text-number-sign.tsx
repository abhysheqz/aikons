import React from "react";
const TextNumberSign: React.FC<
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
        d="M1.733 3.036a1 1 0 0 1 1.124.45L10 15.39V4a1 1 0 1 1 2 0v15a1 1 0 0 1-1.857.515L3 7.61V19a1 1 0 1 1-2 0V4a1 1 0 0 1 .733-.964M14 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.502 3H19.5A2.5 2.5 0 0 1 22 5.5v3a2.5 2.5 0 0 1-2.5 2.5h-2.998a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5"
      />
    </svg>
  );
};
export default TextNumberSign;
