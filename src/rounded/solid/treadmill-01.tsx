import React from "react";
const Treadmill_01: React.FC<
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
        d="M22.192 1.051a1 1 0 0 1 .632 1.265c-.065.196-.126.415-.197.676-.07.252-.148.537-.242.82-.18.548-.457 1.216-.97 1.728-.505.506-1.19.733-1.962.988l-.159.053-4.102 1.368a1 1 0 0 1-.633-1.898l4.103-1.367c1.026-.342 1.212-.43 1.34-.558.171-.172.328-.47.484-.942.075-.227.141-.465.212-.722l.007-.026c.067-.24.14-.505.222-.752a1 1 0 0 1 1.265-.633"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.305 4.597a1 1 0 0 1 .473 1.333l-5 10.5a1 1 0 0 1-1.806-.86l5-10.5a1 1 0 0 1 1.333-.473M6.582 20.293a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0M16.875 22v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.066 21.75c1.134 0 1.904-.652 2.276-1.522.353-.825.357-1.838.113-2.757-.245-.925-.767-1.852-1.583-2.478-.84-.643-1.944-.929-3.227-.616h-.002L2.43 18.147h-.002c-1.004.246-1.346 1.207-1.3 1.918.025.384.16.793.437 1.12a1.6 1.6 0 0 0 1.24.566zM18.87 17a1 1 0 0 0-.996 1c0 .552.446 1 .996 1h.009c.55 0 .995-.448.995-1s-.446-1-.995-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Treadmill_01;
