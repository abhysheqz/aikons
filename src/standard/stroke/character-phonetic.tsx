import React from "react";
const CharacterPhonetic: React.FC<
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
        d="M12 11.5h10V10a5 5 0 0 0-10 0zm0 0V15a5 5 0 0 0 5 5h.5a4.5 4.5 0 0 0 4.5-4.5M12 11.5V10a5 5 0 0 0-5-5h-.5A4.5 4.5 0 0 0 2 9.5m10 2v2.786C12 17.442 9.421 20 6.265 20 3.918 20 2 18.097 2 15.75a4.25 4.25 0 0 1 4.25-4.25z"
      />
    </svg>
  );
};
export default CharacterPhonetic;
