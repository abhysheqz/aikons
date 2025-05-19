import React from "react";
const MouseRightClick_02: React.FC<
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
      <path fill="currentColor" d="M20.5 5a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.167 1.151a2 2 0 0 0-.315-.038l-1.304-.05A37 37 0 0 0 11.5 1c-1.05 0-2.15.06-3.14.136-2.537.197-4.588 2.102-4.925 4.64C3.208 7.49 3 9.69 3 12c0 2.403.225 4.684.462 6.425.33 2.414 2.236 4.28 4.698 4.457.946.069 2.07.118 3.34.118s2.393-.05 3.34-.118c2.462-.177 4.369-2.043 4.698-4.457.237-1.741.462-4.022.462-6.425q-.002-1.046-.051-2.045l-.047-1.149a4.5 4.5 0 0 1-1.974.674l.02.52H12.5V3.017q.47.015.939.043a4.5 4.5 0 0 1 1.728-1.909M8.516 3.13c.638-.05 1.314-.09 1.984-.113V10H5.052a49 49 0 0 1 .366-3.96c.21-1.588 1.486-2.785 3.098-2.91"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_02;
