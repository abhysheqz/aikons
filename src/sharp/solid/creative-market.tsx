import React from "react";
const CreativeMarket: React.FC<
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
        d="M12.53 22.53a.75.75 0 0 1-1.06 0l-10-10a.75.75 0 0 1 0-1.06L11.69 1.25h11.06v11.06zm7.22-16.78c0 .828-.669 1.5-1.493 1.5h-.014a1.497 1.497 0 0 1-1.493-1.5c0-.828.669-1.5 1.493-1.5h.014c.824 0 1.493.672 1.493 1.5M8.629 10.945l1.886 1.073-1.883 1.133.773 1.285 1.852-1.114.011 2.182 1.5-.008-.011-2.203 1.872 1.065.742-1.303-1.886-1.073 1.883-1.133-.773-1.285-1.852 1.114-.011-2.182-1.5.008.011 2.203L9.37 9.642z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreativeMarket;
