import React from "react";
const Siri: React.FC<
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
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.98 8.906c-1.267.183-2.629.116-4.256-.353a1 1 0 1 1 .553-1.922c1.372.395 2.448.436 3.416.295.99-.143 1.908-.48 3.002-.912l.33-.13C12.161 5.033 14.767 4 19 4a1 1 0 0 1 0 2c-3.848 0-6.16.918-8.249 1.747l-.32.127c-1.094.432-2.207.851-3.451 1.032"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.995 4.9a1 1 0 0 1-.896 1.095c-1.03.103-1.937.514-2.892 1.144-.632.416-1.222.88-1.873 1.393-.383.302-.787.62-1.234.955C9.752 11.247 6.795 13 2 13a1 1 0 1 1 0-2c4.205 0 6.748-1.499 8.9-3.113.36-.27.728-.559 1.098-.85.702-.551 1.414-1.11 2.108-1.568 1.107-.73 2.325-1.317 3.795-1.464a1 1 0 0 1 1.094.896"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.46 20.082c1.5.727 3.133 1.163 4.773.77a1 1 0 0 0-.466-1.945c-1 .24-2.132.007-3.433-.624-1.301-.632-2.65-1.6-4.04-2.663q-.441-.339-.89-.685c-1.08-.837-2.179-1.687-3.229-2.366C4.855 11.715 3.42 11 2 11a1 1 0 1 0 0 2c.803 0 1.819.428 3.09 1.249.97.628 1.978 1.407 3.047 2.234q.463.36.942.726c1.393 1.065 2.882 2.145 4.381 2.873"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.1 14.852C10.53 16.795 7.61 19 4 19a1 1 0 1 1 0-2c2.857 0 5.26-1.753 7.967-3.798l.178-.134C14.677 11.153 17.527 9 21 9a1 1 0 1 1 0 2c-2.76 0-5.108 1.744-7.828 3.798z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Siri;
