import React from "react";
const LookRight: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .545-.053 1.076c-.61.362-1.156.61-1.457.72l-.004.002c-.796.3-1.239.452-2.236.452-1.537 0-2.83-.372-3.585-.874l-.831 1.249c1.07.712 2.681 1.125 4.416 1.125 1.253 0 1.887-.219 2.761-.547.152-.056.348-.137.576-.242C21.052 19.458 16.91 22.75 12 22.75 6.063 22.75 1.25 17.937 1.25 12M16 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookRight;
