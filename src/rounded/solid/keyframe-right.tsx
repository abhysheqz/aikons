import React from "react";
const KeyframeRight: React.FC<
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
        d="M7.138 7.482C7.508 7.222 7.951 7 8.5 7s.991.223 1.362.482c.339.237.712.574 1.12.944l.042.037 1.644 1.486.042.038c.297.269.595.538.809.795.246.297.481.694.481 1.218s-.235.92-.481 1.218c-.214.257-.511.526-.81.795l-.041.038-1.644 1.486-.041.037c-.409.37-.782.707-1.121.944-.371.26-.813.482-1.362.482s-.991-.223-1.362-.482c-.339-.237-.712-.574-1.12-.944l-.042-.037-1.644-1.486-.042-.038c-.297-.269-.595-.538-.809-.795C3.235 12.92 3 12.524 3 12s.235-.92.481-1.218c.214-.257.512-.526.81-.795l.041-.038 1.644-1.486.041-.037c.409-.37.782-.707 1.121-.944"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0v-8h-3a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeRight;
