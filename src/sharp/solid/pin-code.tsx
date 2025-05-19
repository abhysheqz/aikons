import React from "react";
const PinCode: React.FC<
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
        d="M22.75 4.5a.75.75 0 0 0-.75-.75H7.12l-5.725 7.807a.75.75 0 0 0 0 .886L7.12 20.25H22a.75.75 0 0 0 .75-.75zM10.009 11H8v2h2.009zM12 11h2.009v2H12zm6.009 0H16v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinCode;
