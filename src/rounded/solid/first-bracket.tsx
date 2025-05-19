import React from "react";
const FirstBracket: React.FC<
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
        d="M6.975 2.218a1.25 1.25 0 0 1-.193 1.757C4.697 5.649 3.25 8.583 3.25 12s1.447 6.351 3.532 8.025a1.25 1.25 0 1 1-1.564 1.95C2.48 19.779.75 16.095.75 12c0-4.096 1.731-7.779 4.468-9.975a1.25 1.25 0 0 1 1.757.193M17.025 2.218a1.25 1.25 0 0 0 .193 1.757C19.303 5.649 20.75 8.583 20.75 12s-1.447 6.351-3.532 8.025a1.25 1.25 0 1 0 1.564 1.95c2.737-2.196 4.468-5.88 4.468-9.975 0-4.096-1.731-7.779-4.468-9.975a1.25 1.25 0 0 0-1.757.193"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstBracket;
