import React from "react";
const Strategy: React.FC<
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
        d="M17.263 4.324a1 1 0 0 1 1.413-.061l2.93 2.73c.177.214.394.549.394 1.007s-.217.793-.395 1.007l-2.93 2.73a1 1 0 0 1-1.35-1.474l1.285-1.18C11.494 9.6 7.912 12.413 6.072 15.07a12 12 0 0 0-1.816 4.125c-.13.562-.194 1.027-.226 1.346-.015.159-.026.383-.03.462A1 1 0 0 1 2 21c0-.191.02-.46.04-.657.039-.392.115-.943.267-1.6.302-1.31.907-3.06 2.12-4.812 2.26-3.264 6.51-6.369 14.349-6.863l-1.452-1.331a1 1 0 0 1-.061-1.413M2 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.293 15.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L16.914 18.5l1.793 1.793a1 1 0 0 1-1.414 1.414L15.5 19.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Strategy;
