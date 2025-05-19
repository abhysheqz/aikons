import React from "react";
const MinusPlusSquare_01: React.FC<
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
        strokeWidth={1.5}
        d="M14.099 21.006h-1.913c-2.237-.635-2.392-3.055-3.12-4.793-.24-.744-.488-1.5-.73-2.225m0 0C7.6 11.772 6.928 9.85 6.772 9.458c-.683-1.715-1.153-2.65-4.27-2.451m5.836 6.981c.46-.815.917-1.63 1.379-2.403 1.596-2.53 3.188-4.578 5.194-4.578m-6.573 6.981c-1.977 3.51-3.992 7.018-6.58 7.018M22.759 9.026h-4.781a.01.01 0 0 1-.006-.018l3.286-2.441c1.638-1.466.303-3.833-1.523-3.54-1.09.07-1.788 1.099-1.788 1.969"
      />
    </svg>
  );
};
export default MinusPlusSquare_01;
