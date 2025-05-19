import React from "react";
const FlipVertical: React.FC<
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
        d="M10.577 15.262a1.708 1.708 0 0 1 2.845 0l3.012 4.43c.767 1.127.048 2.808-1.422 2.808H8.987c-1.47 0-2.19-1.681-1.422-2.808zM7.565 3.809C6.798 2.68 7.517 1 8.987 1h6.025c1.47 0 2.19 1.681 1.422 2.809l-3.012 4.43a1.708 1.708 0 0 1-2.845 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11.75a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m7 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m7.5 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipVertical;
