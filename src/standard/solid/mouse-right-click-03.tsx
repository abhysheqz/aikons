import React from "react";
const MouseRightClick_03: React.FC<
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
        d="M12 1c-1.05 0-2.15.06-3.14.136-2.537.197-4.588 2.102-4.925 4.64C3.708 7.49 3.5 9.69 3.5 12c0 2.403.225 4.684.462 6.425.33 2.414 2.236 4.28 4.698 4.457.946.069 2.07.118 3.34.118s2.393-.05 3.34-.118c2.462-.177 4.369-2.043 4.698-4.457.237-1.741.462-4.022.462-6.425 0-2.311-.208-4.51-.435-6.223-.337-2.54-2.388-4.444-4.926-4.641A41 41 0 0 0 12 1m-1 2.017c-.67.022-1.346.063-1.984.113-1.612.125-2.888 1.322-3.098 2.91A49 49 0 0 0 5.552 10H11zm7.082 3.022A49 49 0 0 1 18.448 10h-4.275l3.81-4.444q.065.235.1.483m-1.259-2.204L13 8.295V3.017c.67.022 1.346.063 1.985.113a3.4 3.4 0 0 1 1.838.705"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_03;
