import React from "react";
const Eye: React.FC<
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
        d="M19.64 4.927C17.753 3.625 15.051 2.25 12 2.25S6.246 3.625 4.36 4.927a20.5 20.5 0 0 0-2.254 1.808c-.26.24-.684.677-.84.836l-.011.012a1 1 0 0 0 1.49 1.335c.123-.127.481-.494.72-.716a18.5 18.5 0 0 1 2.032-1.63C7.231 5.376 9.53 4.25 12 4.25s4.77 1.125 6.503 2.323a18.5 18.5 0 0 1 2.032 1.63c.239.221.598.59.72.715a1 1 0 0 0 1.49-1.335l-.012-.012c-.155-.16-.58-.595-.84-.836a20.5 20.5 0 0 0-2.254-1.808"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.25c-2.57 0-4.774 1.131-6.48 2.463s-3.022 2.981-3.728 3.97c-.253.353-.542.755-.542 1.317s.289.964.542 1.316c.706.99 2.021 2.638 3.728 3.971C7.226 20.619 9.43 21.75 12 21.75s4.774-1.131 6.48-2.463 3.022-2.981 3.728-3.97c.253-.353.542-.755.542-1.317s-.29-.964-.542-1.316c-.706-.99-2.021-2.638-3.728-3.971C16.774 7.381 14.57 6.25 12 6.25M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Eye;
