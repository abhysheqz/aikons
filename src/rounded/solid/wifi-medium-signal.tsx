import React from "react";
const WifiMediumSignal: React.FC<
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
        d="M3.668 4.76A15.1 15.1 0 0 1 12 2.25c3.058 0 5.913.92 8.332 2.51l.147.096c1.117.732 2.02 1.323 2.233 2.596.114.675-.036 1.26-.338 1.847-.277.54-.712 1.132-1.223 1.829l-.8 1.091c-.26.354-.39.531-.57.573-.18.043-.39-.067-.812-.286C16.99 11.478 14.454 11 12 11c-2.453 0-4.988.478-6.968 1.506-.422.22-.633.329-.813.286-.18-.042-.31-.219-.57-.573l-.8-1.091c-.51-.697-.945-1.29-1.222-1.829-.302-.586-.452-1.172-.338-1.847.214-1.273 1.116-1.864 2.233-2.596zM11.999 13c2.137 0 4.201.402 5.771 1.144.321.152.482.228.558.39a.5.5 0 0 1 .047.187c.01.178-.105.335-.334.647-.175.239-.262.358-.375.412a.5.5 0 0 1-.133.042c-.124.021-.277-.03-.585-.134C15.534 15.21 13.723 15 12 15s-3.534.21-4.95.688c-.307.103-.46.155-.584.134a.5.5 0 0 1-.132-.042c-.114-.054-.201-.173-.376-.412-.23-.312-.344-.469-.334-.647a.5.5 0 0 1 .047-.187c.077-.162.237-.238.558-.39C7.798 13.402 9.863 13 12 13m-3.744 5.5c.7.957 1.275 1.74 1.801 2.277.545.556 1.156.973 1.944.973s1.399-.416 1.944-.973c.526-.537 1.1-1.32 1.801-2.276.222-.303.333-.454.333-.618a.53.53 0 0 0-.126-.332c-.11-.123-.278-.159-.617-.23C14.37 17.113 13.21 17 12 17s-2.37.114-3.335.32c-.338.072-.507.108-.616.23a.53.53 0 0 0-.127.333c0 .164.111.315.333.618"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiMediumSignal;
