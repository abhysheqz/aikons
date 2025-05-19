import React from "react";
const MicOff_02: React.FC<
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
        d="M21.336 22.75 1.25 2.665 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M6.248 6.75v4a5.75 5.75 0 0 0 9.143 4.642L6.267 6.27q-.02.238-.02.481M17.748 10.75v-4A5.75 5.75 0 0 0 7.166 3.632l9.877 9.877c.45-.819.705-1.76.705-2.759"
      />
      <path
        fill="currentColor"
        d="M2.998 10.75c0 4.633 3.5 8.448 8 8.945V21h-2v2h6v-2h-2v-1.305a8.96 8.96 0 0 0 4.708-1.987l-1.422-1.423A7 7 0 0 1 4.998 10.75zM20.998 10.75h-2c0 1.347-.381 2.606-1.04 3.673l1.444 1.445a8.96 8.96 0 0 0 1.596-5.118"
      />
    </svg>
  );
};
export default MicOff_02;
