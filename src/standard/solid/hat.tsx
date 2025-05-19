import React from "react";
const Hat: React.FC<
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
        d="M8.185 4.25a3.75 3.75 0 0 0-3.727 3.335l-.462 4.16 1.053.37c1.415.501 4.007.884 6.951.884s5.536-.383 6.95-.885l1.05-.372-.458-4.157a3.75 3.75 0 0 0-3.727-3.336zM10.25 10a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-5.856 3.14L4 13 1.88 15.136c-.398.318-.629.799-.629 1.308 0 .61.336 1.205.929 1.482C4.599 19.06 8.122 19.75 12 19.75s7.401-.69 9.822-1.823c.592-.277.928-.872.928-1.482 0-.51-.231-.99-.628-1.308L20 12.999l-.393.14c-1.6.568-4.586 1.111-7.607 1.111s-6.007-.543-7.606-1.11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hat;
