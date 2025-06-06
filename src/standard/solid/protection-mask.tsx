import React from "react";
const ProtectionMask: React.FC<
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
        d="M8.293 11.003c-.071.007-.097.024-.14.08-.173.235-.265.675.091 1.529.348.833 1.034 1.822 1.953 2.865.916 1.041 2.012 2.08 3.11 3.004l.676-3.315c-2.258-2.287-3.781-3.43-4.773-3.907-.518-.248-.8-.269-.917-.256M15.2 13.55c-2.199-2.203-3.855-3.486-5.125-4.095-.695-.333-1.365-.509-1.993-.442a2.15 2.15 0 0 0-1.534.878c-.8 1.079-.609 2.387-.148 3.49.47 1.125 1.318 2.305 2.296 3.416 1.965 2.234 4.661 4.424 6.656 5.68a3.5 3.5 0 0 0 1.861.522 3.71 3.71 0 0 0 3.407-2.245l2.3-5.36a1 1 0 0 0-.048-.886l-1.974-3.5a1 1 0 0 0-1.43-.338z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3a8 8 0 0 0-8 8c0 1.826.608 3.78 1.592 5.13.245.335.408.758.408 1.224V22a1 1 0 1 1-2 0v-4.645a.1.1 0 0 0-.023-.046C1.72 15.585 1 13.209 1 11 1 5.477 5.477 1 11 1c4.73 0 8.958 3.297 9.975 7.779a1 1 0 1 1-1.95.442C18.223 5.687 14.835 3 11 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ProtectionMask;
