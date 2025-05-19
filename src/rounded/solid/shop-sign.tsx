import React from "react";
const ShopSign: React.FC<
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
        d="M10.34 20.043c.078.322.155.643.253.907.113.3.287.626.617.883.328.256.686.346 1.004.384.28.033.613.033.95.033h6.5c.512 0 .995 0 1.384-.055.429-.06.93-.21 1.302-.662.374-.455.422-.976.393-1.409-.026-.389-.126-.857-.231-1.35l-.013-.059-2.974-13.919c-.11-.513-.21-.981-.34-1.358-.145-.416-.36-.826-.761-1.147-.4-.32-.848-.44-1.285-.493-.4-.048-.883-.048-1.417-.048h-8.54a.98.98 0 0 0-.944.724L1.283 21.022a.976.976 0 1 0 1.889.503L4.38 17h5.228zM9.129 15 7.132 6.699l-2.217 8.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShopSign;
