import React from "react";
const Headset: React.FC<
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
        d="M4.867 9.477c-.378.178-.566.267-.664.187s-.052-.263.04-.627a8.003 8.003 0 0 1 15.514 0c.092.364.138.546.04.627s-.286-.01-.664-.187A5 5 0 0 0 17 9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3 5 5 0 0 0 5-5v-3c0-5.523-4.477-10-10-10S2 5.477 2 11v3a5 5 0 0 0 5 5 3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3 5 5 0 0 0-2.133.477"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 13a1 1 0 0 1 1 1v1.884c0 .972 0 1.756-.047 2.393-.048.655-.15 1.232-.393 1.775a5 5 0 0 1-2.508 2.508c-.543.244-1.12.345-1.775.393-.637.047-1.42.047-2.393.047H12a1 1 0 1 1 0-2h2.846c1.02 0 1.73 0 2.284-.041.545-.04.86-.115 1.101-.223a3 3 0 0 0 1.505-1.505c.108-.24.183-.556.223-1.1.04-.556.041-1.266.041-2.285V14a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Headset;
