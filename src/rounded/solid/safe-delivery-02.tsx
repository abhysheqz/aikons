import React from "react";
const SafeDelivery_02: React.FC<
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
        d="M3.248 9c0-4.371 4.015-7.75 8.75-7.75s8.75 3.379 8.75 7.75a.75.75 0 0 1-.75.75h-16a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.998 14.25c-.81 0-1.651.076-2.19.705-.263.307-.395.68-.467 1.06s-.093.822-.093 1.318v2.334c0 .496.021.939.093 1.317.072.382.204.754.467 1.061.539.629 1.38.705 2.19.705h4c.81 0 1.651-.076 2.19-.705.263-.307.396-.68.467-1.06s.093-.822.093-1.318v-2.334c0-.496-.021-.939-.093-1.317-.072-.382-.204-.754-.467-1.061-.539-.629-1.38-.705-2.19-.705zm2.008 4.5c.686 0 1.242-.56 1.242-1.25s-.556-1.25-1.242-1.25h-.015c-.687 0-1.243.56-1.243 1.25s.556 1.25 1.243 1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.446 8.625a.996.996 0 0 1 1.36-.188l7.195 5.204 7.195-5.204a.996.996 0 0 1 1.36.188.916.916 0 0 1-.194 1.312l-7.777 5.625c-.346.25-.822.25-1.167 0L3.64 9.937a.916.916 0 0 1-.194-1.312"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafeDelivery_02;
