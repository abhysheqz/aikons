import React from "react";
const TwoFinger_03: React.FC<
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
        d="M12.877 1.25c-.75 0-1.357.596-1.357 1.332v8.773h-.794V4.847c0-.764-.616-1.369-1.357-1.369s-1.357.605-1.357 1.369v10.412l-2.576-2.592a1.563 1.563 0 0 0-2.338.132 1.61 1.61 0 0 0-.03 1.96l.012.015 4.762 7.976h10.4c1.661 0 3.008-1.322 3.008-2.952v-7.241c0-.707-.584-1.281-1.305-1.281h-1.409v1.809h-.794v-1.642q-.001-.226-.074-.427a1.3 1.3 0 0 0-1.231-.854h-1.409v2.307h-.794V2.582c0-.736-.608-1.332-1.357-1.332"
      />
    </svg>
  );
};
export default TwoFinger_03;
