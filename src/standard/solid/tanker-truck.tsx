import React from "react";
const TankerTruck: React.FC<
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
        d="M4 3.75H2.553c-.585 0-1.2.3-1.495.906C.545 5.712.25 7.057.25 8.5s.295 2.788.808 3.844c.295.607.91.906 1.495.906H4zm1.5 9.5H8v-9.5H5.5zm5.447 0H9.5v-9.5h1.447c.585 0 1.2.3 1.495.906.513 1.056.808 2.401.808 3.844s-.295 2.788-.808 3.844c-.295.607-.91.906-1.495.906m10.7 5H22a1.75 1.75 0 0 0 1.75-1.75v-3.446a2.75 2.75 0 0 0-.392-1.415l-2.132-3.554a2.75 2.75 0 0 0-2.358-1.335H16a1.75 1.75 0 0 0-1.75 1.75v9.75h2.104a2.751 2.751 0 0 0 5.293 0m-3.897-6.5v-3.5h1.118c.439 0 .846.23 1.072.607l1.735 2.893zm0 5.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M1 14.25h12v4H7.646a2.751 2.751 0 0 1-5.292 0H2A1.75 1.75 0 0 1 .25 16.5V15a.75.75 0 0 1 .75-.75m2.75 3.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TankerTruck;
