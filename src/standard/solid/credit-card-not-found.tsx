import React from "react";
const CreditCardNotFound: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.662 3.25H4A2.75 2.75 0 0 0 1.25 6v2.25h8.412zM11.162 9.75H1.25V18A2.75 2.75 0 0 0 4 20.75h16c.61 0 1.172-.198 1.628-.534zM22.554 19.02l-9.27-9.27h9.466V18c0 .36-.07.705-.196 1.02M11.783 8.25l-5-5H20A2.75 2.75 0 0 1 22.75 6v2.25z"
      />
    </svg>
  );
};
export default CreditCardNotFound;
