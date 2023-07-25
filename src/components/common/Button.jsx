import cc from "classcat";

export default function Button({ outline, children, ...props }) {
  console.log(props.className);
  return (
    <button
      {...props}
      className={cc([
        "w-full btn text-white text-h2 btn-primary",
        outline ? "btn-outline hover:!text-white" : "outline-none",
        props.className,
      ])}
    >
      {children}
    </button>
  );
}
