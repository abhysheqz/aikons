import React from "react";
const KeyframeBottom: React.FC<
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
        d="M10.782 3.481C11.08 3.235 11.476 3 12 3s.92.235 1.218.481c.257.214.526.512.795.81l.038.041 1.486 1.644.037.041c.37.409.707.782.944 1.121.26.37.482.813.482 1.362s-.223.991-.482 1.362c-.237.339-.574.712-.944 1.12l-.037.042-1.486 1.644-.038.042c-.269.297-.538.595-.795.809-.297.246-.694.481-1.218.481s-.92-.235-1.218-.481c-.257-.214-.526-.511-.795-.81l-.038-.041-1.486-1.644-.037-.041c-.37-.409-.707-.782-.944-1.121C7.222 9.492 7 9.049 7 8.5s.223-.991.482-1.362c.237-.339.574-.712.944-1.12l.037-.042L9.95 4.332l.038-.042c.269-.297.538-.595.795-.809"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15a1 1 0 0 1 1 1v3h8a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h8v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeBottom;
