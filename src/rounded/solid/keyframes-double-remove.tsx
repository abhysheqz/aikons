import React from "react";
const KeyframesDoubleRemove: React.FC<
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
        d="M14.97 5.026a1.4 1.4 0 0 0-.304.222 1 1 0 1 1-1.328-1.496c.458-.406 1.008-.752 1.73-.752.68 0 1.21.307 1.652.684.404.344.837.836 1.322 1.387l.045.05 2.616 2.97c.66.75 1.218 1.381 1.601 1.944.406.595.696 1.221.696 1.965s-.29 1.37-.696 1.965c-.383.563-.94 1.195-1.601 1.945l-2.66 3.02c-.486.55-.919 1.042-1.323 1.386-.443.377-.971.684-1.652.684-.722 0-1.272-.346-1.73-.752a1 1 0 0 1 1.328-1.496c.148.132.244.193.304.222a.2.2 0 0 0 .098.026h.002c.022 0 .107.002.353-.207.282-.24.62-.62 1.163-1.236l2.575-2.923c.713-.81 1.185-1.348 1.49-1.795.29-.426.349-.658.349-.839s-.058-.413-.349-.839c-.305-.447-.777-.986-1.49-1.795l-2.575-2.923c-.543-.617-.881-.997-1.163-1.236-.245-.21-.33-.207-.353-.207h-.002a.2.2 0 0 0-.098.026M1 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.335 3.686C7.776 3.308 8.303 3 8.988 3c.68 0 1.211.304 1.659.68.408.344.846.836 1.337 1.387l2.691 3.02c.669.75 1.232 1.38 1.62 1.943.41.595.704 1.223.704 1.97s-.295 1.375-.705 1.97c-.387.562-.95 1.194-1.619 1.944l-2.69 3.02c-.492.55-.93 1.042-1.338 1.386-.448.376-.978.68-1.66.68-.684 0-1.21-.308-1.652-.686-.38-.324-.789-.784-1.245-1.297l-2.766-3.103-.412-.463c-.351-.399-.527-.598-.448-.774s.35-.177.888-.177H9a2.5 2.5 0 1 0 0-5H3.352c-.539 0-.808 0-.888-.177-.08-.176.097-.375.448-.774l.412-.463L6.09 4.983c.456-.513.865-.973 1.245-1.297"
      />
    </svg>
  );
};
export default KeyframesDoubleRemove;
