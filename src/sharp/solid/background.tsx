import React from "react";
const Background: React.FC<
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
        d="M10.19 1.749H1.749v8.442zM1.749 12.312v3.38L15.69 1.749h-3.379zM17.81 1.749 1.75 17.813v3.379L21.19 1.749zm4.438 1.063L2.813 22.249h3.379L22.249 6.19zm0 5.5L8.313 22.249h3.379L22.249 11.69zm0 5.5-8.436 8.437h8.436z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Background;
