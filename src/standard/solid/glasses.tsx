import React from "react";
const Glasses: React.FC<
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
        d="M15.519 4.316a2 2 0 0 1 3.237.594l3.906 8.68c.227.503-.02 1.038-.523 1.265-.504.226-1.074.059-1.3-.445l-3.907-8.68-.475.476a1 1 0 1 1-1.414-1.415zM5.241 4.911a2 2 0 0 1 3.238-.593l.476.475A1 1 0 0 1 7.54 6.207l-.475-.475L3.16 14.41c-.227.503-.683.775-1.186.548-.638-.347-.865-.865-.638-1.37zM9.75 15.49a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 15c0-.966.784-1.75 1.75-1.75H22a.75.75 0 0 1 .67 1.085l-.92 1.842V19A1.75 1.75 0 0 1 20 20.75h-5.5A1.75 1.75 0 0 1 12.75 19zM1.362 13.606A.75.75 0 0 1 2 13.25h7.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 19v-2.823l-.92-1.842a.75.75 0 0 1 .032-.73"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Glasses;
