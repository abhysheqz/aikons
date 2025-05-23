import React from "react";
const CheckmarkCircle_03: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12a10.7 10.7 0 0 0-1.659-5.739c-.145-.229-.217-.343-.346-.367s-.237.057-.456.22q-.662.492-1.338 1.115c-1.165 1.07-2.287 2.345-3.272 3.582a52 52 0 0 0-3.266 4.613l-.045.072-.01.018-.003.004a1.002 1.002 0 0 1-1.723-.022c-.95-1.66-1.734-2.409-2.206-2.74a1.8 1.8 0 0 0-.478-.252.4.4 0 0 0-.06-.01A1 1 0 0 1 8 10.5c.079-.009.303 0 .569.102.273.087.614.243 1.004.516.53.37 1.146.953 1.816 1.866a.14.14 0 0 0 .227-.004 54 54 0 0 1 2.499-3.415c1.022-1.284 2.216-2.645 3.483-3.809.409-.376.832-.737 1.265-1.071.276-.213.414-.32.417-.463s-.122-.249-.372-.458A10.7 10.7 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12"
      />
    </svg>
  );
};
export default CheckmarkCircle_03;
