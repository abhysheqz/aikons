import React from "react";
const Mic_01: React.FC<
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
        d="M12 1.25A5.75 5.75 0 0 0 6.25 7v4a5.75 5.75 0 0 0 11.323 1.42c.075-.292.112-.438.022-.554s-.252-.116-.577-.116H14a.75.75 0 0 1 0-1.5h3.15c.283 0 .424 0 .512-.088s.088-.23.088-.512v-1.3c0-.283 0-.424-.088-.512s-.23-.088-.512-.088H14a.75.75 0 0 1 0-1.5h3.018c.325 0 .487 0 .577-.116s.053-.262-.022-.555A5.75 5.75 0 0 0 12 1.25"
        clipRule="evenodd"
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
export default Mic_01;
