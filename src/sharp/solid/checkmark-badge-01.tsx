import React from "react";
const CheckmarkBadge_01: React.FC<
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
        d="M12.537 1.473a.76.76 0 0 0-1.074 0L8.688 4.247h-3.68a.76.76 0 0 0-.76.76v3.681l-2.775 2.775a.76.76 0 0 0 0 1.074l2.774 2.775v3.68c0 .42.34.76.76.76h3.681l2.775 2.775a.76.76 0 0 0 1.074 0l2.775-2.774h3.68c.42 0 .76-.34.76-.76v-3.681l2.775-2.775a.76.76 0 0 0 0-1.074l-2.774-2.775v-3.68a.76.76 0 0 0-.76-.76h-3.681zm2.849 8.67.643-.386-.772-1.286-.643.386c-1.386.831-2.51 2.185-3.268 3.278-.28.402-.515.779-.703 1.096a9 9 0 0 0-.578-.498 15 15 0 0 0-.663-.473l-.013-.008-.64-.39-.78 1.282.64.389a6.812 6.812 0 0 1 1.605 1.435l.742.927.519-1.068c.048-.092.188-.361.283-.529.19-.336.468-.8.82-1.308.717-1.033 1.694-2.179 2.808-2.847"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkBadge_01;
