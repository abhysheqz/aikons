import React from "react";
const KeyframeLeft: React.FC<
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
        d="M14.138 7.482c.37-.26.813-.482 1.362-.482s.991.223 1.362.482c.339.237.712.574 1.12.944l.042.037 1.644 1.486.042.038c.297.269.595.538.809.795.246.297.481.694.481 1.218s-.235.92-.481 1.218c-.214.257-.511.526-.81.795l-.041.038-1.644 1.486-.041.037c-.409.37-.782.707-1.121.944-.37.26-.813.482-1.362.482s-.991-.223-1.362-.482c-.339-.237-.712-.574-1.12-.944l-.042-.037-1.644-1.486-.042-.038c-.297-.269-.595-.538-.809-.795C10.235 12.92 10 12.524 10 12s.235-.92.481-1.218c.214-.257.511-.526.81-.795l.041-.038 1.644-1.486.041-.037c.409-.37.782-.707 1.121-.944"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2a1 1 0 0 1 1 1v8h3a1 1 0 1 1 0 2H5v8a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeLeft;
