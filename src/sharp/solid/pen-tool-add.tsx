import React from "react";
const PenToolAdd: React.FC<
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
        d="M5.5 3.75v-2h-2v2h-2v2h2v2h2v-2h2v-2zM10.932 7.279l-6.51 2.995L3 21.184l6.148-6.148-.913-.914 1.063-1.062 2.889 2.889-1.063 1.063-.913-.913-6.15 6.151 10.914-1.424 2.995-6.51zM18.305 12.525l-.034-.036-5.512-5.51-.036-.035zM15.266 2.97a.75.75 0 0 0-1.17.133L12.093 6.31l6.848 6.847 3.207-2.004a.752.752 0 0 0 .133-1.169z"
      />
    </svg>
  );
};
export default PenToolAdd;
