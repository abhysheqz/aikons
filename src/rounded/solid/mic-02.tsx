import React from "react";
const Mic_02: React.FC<
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
        d="M6.25 7a5.75 5.75 0 1 1 11.5 0v4a5.75 5.75 0 0 1-11.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.222 10.25c.537 0 .972.43.972.961 0 3.718 3.047 6.731 6.806 6.731s6.806-3.013 6.806-6.73c0-.531.435-.962.972-.962s.972.43.972.961c0 4.455-3.403 8.123-7.778 8.602v1.014h1.945c.537 0 .972.43.972.961a.967.967 0 0 1-.972.962H9.083a.967.967 0 0 1-.972-.962c0-.53.435-.961.972-.961h1.945v-1.014c-4.375-.479-7.778-4.147-7.778-8.601 0-.531.435-.962.972-.962"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mic_02;
