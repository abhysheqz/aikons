import React from "react";
const MoneySendFlow_02: React.FC<
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
        d="M2.182 2.733c3.924.981 6.078.97 7.843.735 1.73-.23 3.418-.757 5.975-.757 2.063 0 3.624.258 4.682.522 1.2.3 2.068.764 2.068.764V18.5s-1.288-.7-2.432-.986c-.772-.193-1.878-.389-3.318-.453V14.75H7v3.139c-1.383-.086-3.045-.341-5.182-.875l-.568-.142V2.5zm.568 12.962c1.228.29 2.274.478 3.187.59a4.005 4.005 0 0 0-3.187-3.219zm18.5-2.128c-1.264.227-2.4 1.012-2.896 2.09.942.1 1.719.25 2.328.402q.313.079.568.156zM11.999 7.5a3 3 0 1 0 .001 6 3 3 0 0 0-.001-6m6.519-3.14c.16 1.608 1.374 3.08 2.732 3.494V4.969a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 7.422c1.367-.284 2.537-1.308 2.995-2.477A30 30 0 0 1 2.75 4.41z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 16h1.5v5.5h-1.5zm-3 0h1.5v3.5h-1.5zm6 0h1.5v3.5h-1.5z"
      />
    </svg>
  );
};
export default MoneySendFlow_02;
