import React from "react";
const Star: React.FC<
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
        d="M10.677 2.954c.655-1.272 2.49-1.272 3.146 0l2.206 4.288c.037.071.106.121.185.134l4.797.756c1.422.224 1.99 1.95.972 2.961l-3.434 3.41a.25.25 0 0 0-.07.215l.756 4.758c.225 1.41-1.26 2.478-2.544 1.83l-4.326-2.183a.25.25 0 0 0-.23 0L7.81 21.306c-1.285.648-2.77-.42-2.545-1.83l.756-4.758a.25.25 0 0 0-.07-.216l-3.434-3.409c-1.017-1.01-.45-2.737.972-2.961l4.797-.756a.25.25 0 0 0 .185-.134z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Star;
