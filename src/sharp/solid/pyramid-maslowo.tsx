import React from "react";
const PyramidMaslowo: React.FC<
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
        d="m15.637 8-3.636-6.545L8.365 8zM16.748 10h-3.746v11.75h10.274L20.08 16h-5.079v-2h3.968zM11.002 21.75V10H7.254l-2.222 4h3.97v2H3.921L.727 21.75z"
      />
    </svg>
  );
};
export default PyramidMaslowo;
