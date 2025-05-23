import React from "react";
const GraduateMale: React.FC<
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
        d="M5 11.875a1 1 0 0 1 1 1v2.023c0 1.817.88 3.465 2.264 4.364l1.4.91a4.23 4.23 0 0 0 4.672 0l1.4-.91c1.384-.9 2.264-2.547 2.264-4.364v-2.023a1 1 0 1 1 2 0v2.023c0 2.446-1.184 4.747-3.174 6.04l-1.4.91a6.23 6.23 0 0 1-6.852 0l-1.4-.91C5.184 19.646 4 17.345 4 14.899v-2.023a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.125c-.57 0-1.092.148-1.656.39-.542.234-1.17.578-1.948 1.002l-4.81 2.63c-.614.335-1.15.628-1.529.917-.402.308-.784.73-.806 1.357-.022.626.327 1.075.704 1.413.356.32.87.657 1.459 1.043L4 10.19v3.185c0 .239.117.463.316.605a.8.8 0 0 0 .69.11c1.987-.606 4.392-.965 6.994-.965s5.007.359 6.993.965c.235.072.492.031.69-.11a.74.74 0 0 0 .317-.605V10.19l.586-.313c.59-.386 1.103-.723 1.459-1.043.377-.338.726-.787.704-1.413-.022-.627-.404-1.05-.806-1.357-.378-.289-.915-.582-1.529-.918l-4.81-2.629c-.777-.424-1.406-.768-1.948-1.001-.564-.243-1.086-.391-1.656-.391"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GraduateMale;
