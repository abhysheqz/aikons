import React from "react";
const HonourStar: React.FC<
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
        d="M1.5 3.001a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 15.98V3H3.75v12.98c0 .25.124.484.331.623l7.437 5.002a.85.85 0 0 0 .948 0l7.452-5.002a.75.75 0 0 0 .332-.622m-7.638-9.22a.68.68 0 0 0-1.122 0l-1.143 1.67-1.56.465a.68.68 0 0 0-.338 1.075l1.102 1.38-.222 1.853a.68.68 0 0 0 .923.714l1.799-.704 1.799.704a.68.68 0 0 0 .923-.714l-.222-1.853 1.101-1.38a.68.68 0 0 0-.337-1.075l-1.56-.465z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HonourStar;
