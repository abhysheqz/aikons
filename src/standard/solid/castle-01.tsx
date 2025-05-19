import React from "react";
const Castle_01: React.FC<
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
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.409 1.538A.75.75 0 0 1 4 1.25h3a.75.75 0 0 1 .696.471l.812 2.029h.877l.38-1.897a.75.75 0 0 1 .735-.603h3a.75.75 0 0 1 .735.603l.38 1.897h.877l.812-2.029A.75.75 0 0 1 17 1.25h3a.75.75 0 0 1 .728.932l-1 4a.75.75 0 0 1-.198.348l-.72.72H5.19l-.72-.72a.75.75 0 0 1-.198-.348l-1-4a.75.75 0 0 1 .137-.644M6.135 8.75h11.73l.214 1.5H15a.75.75 0 0 0 0 1.5h3.293l1.45 10.144a.75.75 0 0 1-.743.856h-3.986a.75.75 0 0 0 .722-.897l-.84-4.196a1.75 1.75 0 0 0-1.716-1.407h-2.36a1.75 1.75 0 0 0-1.716 1.407l-.84 4.196a.75.75 0 0 0 .722.897H5a.75.75 0 0 1-.742-.856L5.42 13.75h3.578a.75.75 0 0 0 0-1.5H5.635zm2.88 14h5.97a.75.75 0 0 1-.72-.603l-.84-4.196a.25.25 0 0 0-.245-.201h-2.36a.25.25 0 0 0-.245.201l-.84 4.196a.75.75 0 0 1-.72.603"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Castle_01;
