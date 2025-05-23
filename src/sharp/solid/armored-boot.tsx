import React from "react";
const ArmoredBoot: React.FC<
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
        d="M13 1.25h.75v11.662c-2.138.074-4.098 1.097-5.32 2.53l-.025.03c-.204.265-.348.35-.425.378-.068.026-.15.034-.294 0-.162-.04-.345-.12-.612-.244l-.053-.024a7 7 0 0 0-.847-.347c-.402-.125-.842-.097-1.203-.038a7 7 0 0 0-1.094.288 11 11 0 0 0-1.182.486l-.02.01-.006.003-.002.001h-.001L2.64 16q-.163.09-.39.229V12.75H6v-1.5H2.25v-2h3.808v-1.5H2.25v-2s.596-.712.809-.916A11.4 11.4 0 0 1 4.982 3.36C6.714 2.295 9.349 1.25 13 1.25M9 6a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 14.407h2.228c1.176.647 2.48 1.379 2.812 1.565q.12.077.237.155a8 8 0 0 0-.479.17c-1.27.434-3.49 2.161-3.49 5.703v.75H6A3.75 3.75 0 0 1 2.25 19v-.963c.455-.332.85-.58 1.096-.714l.004-.002a5 5 0 0 1 .28-.129c.19-.083.45-.19.736-.289.287-.099.583-.182.846-.225.28-.046.446-.033.515-.01.217.067.427.165.685.285l.029.013c.248.115.562.261.892.341.348.085.752.107 1.176-.053.41-.155.761-.45 1.073-.852.995-1.158 2.643-1.995 4.418-1.995"
      />
      <path
        fill="currentColor"
        d="M21.75 22.75h-4.942V22c0-2.837 1.753-4.044 2.488-4.288l.043-.017a10 10 0 0 1 1.312-.39q.16.2.3.436c.549.93.799 2.22.799 4.26z"
      />
    </svg>
  );
};
export default ArmoredBoot;
