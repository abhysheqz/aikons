import React from "react";
const MoneyAdd_02: React.FC<
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
      <path fill="currentColor" d="M17.75 17.75h-3v-2h3v-3h2v3h3v2h-3v3h-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 3.483c3.924.981 6.078.97 7.843.735 1.73-.23 3.418-.757 5.975-.757 2.063 0 3.624.258 4.682.522 1.2.3 2.068.764 2.068.764V14.5H21v-3h-4.5v3h-3v3.47c-1.102.163-2.061.397-3.275.56-1.985.264-4.331.252-8.407-.766l-.568-.142V3.25zm.568 12.962c1.228.29 2.274.478 3.187.59a4.005 4.005 0 0 0-3.187-3.219zm9.249-8.195a3 3 0 1 0 .001 6 3 3 0 0 0-.001-6m6.519-3.14c.16 1.608 1.374 3.08 2.732 3.494V5.719a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 8.172c1.367-.284 2.537-1.308 2.995-2.477A30 30 0 0 1 2.75 5.16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyAdd_02;
