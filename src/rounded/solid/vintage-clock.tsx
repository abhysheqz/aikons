import React from "react";
const VintageClock: React.FC<
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
        d="M20 17.25q-.126 0-.246.01V6.74q.12.01.246.01a.75.75 0 0 0 0-1.5 1.17 1.17 0 0 1-.612-.163 1.3 1.3 0 0 1-.471-.497 17 17 0 0 0-.374-.653c-.105-.23-.557-.687-1.52-.687h-.594c-.061.01-.202.01-.276-.065a42 42 0 0 1-.6-.598c-.489-.493-1.188-.818-1.806-1.02-.625-.204-1.277-.317-1.747-.317s-1.122.113-1.748.317c-.617.202-1.316.527-1.805 1.02-.27.272-.463.466-.6.598-.066.065-.211.07-.276.065h-.594c-.857 0-1.37.458-1.52.687-.1.16-.231.397-.374.653a1.3 1.3 0 0 1-.466.494A1.17 1.17 0 0 1 4 5.25a.75.75 0 0 0 0 1.5q.129 0 .254-.011V17.26A3 3 0 0 0 4 17.25a.75.75 0 0 0 0 1.5c.245 0 .449.065.617.166.193.117.354.291.466.494.143.256.274.492.374.653.15.23.663.687 1.52.687h.594c.065-.006.21 0 .276.065.137.131.33.326.6.598.489.493 1.188.818 1.806 1.02.625.204 1.277.317 1.747.317s1.122-.113 1.747-.317c.618-.202 1.317-.527 1.806-1.02.27-.272.463-.466.6-.598.074-.074.215-.074.276-.065h.594c.963 0 1.415-.458 1.52-.687.1-.16.232-.397.374-.653.113-.204.275-.38.471-.497.167-.1.369-.163.612-.163a.75.75 0 0 0 0-1.5m-7.996-10.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.254 10a4.75 4.75 0 0 0 4 4.691v2.559h-.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25v-2.559A4.751 4.751 0 1 0 7.254 10m6.28-.47a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VintageClock;
