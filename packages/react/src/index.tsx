import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ReactElement,
  ReactNode,
} from "react";

type SkeletonAnimation = "shimmer" | "pulse" | "wave" | "none";

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];

type SkeletonProps<T extends ElementType = "div"> = {
  as?: T;
  animation?: SkeletonAnimation;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

type SkeletonComponent = <T extends ElementType = "div">(
  props: SkeletonProps<T> & { ref?: PolymorphicRef<T> },
) => ReactElement | null;

type SkeletonForwardRefComponent = ForwardRefExoticComponent<
  SkeletonProps & RefAttributes<HTMLDivElement>
> &
  SkeletonComponent;

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function SkeletonRoot<T extends ElementType = "div">(
  {
    as,
    animation = "shimmer",
    className,
    children,
    ...props
  }: SkeletonProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Component = as ?? "div";

  return (
    <Component
      ref={ref}
      className={cx("sk", `sk-${animation}`, className)}
      aria-hidden={props["aria-hidden" as keyof typeof props] ?? true}
      {...props}
    >
      {children}
    </Component>
  );
}

export const Skeleton = forwardRef(
  SkeletonRoot as (
    props: SkeletonProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => ReactElement | null,
) as SkeletonForwardRefComponent;

Skeleton.displayName = "Skeleton";

export const SkeletonLine = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("sk-line", className)} {...props} />
));

SkeletonLine.displayName = "SkeletonLine";

export const SkeletonBox = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("sk-box", className)} {...props} />
));

SkeletonBox.displayName = "SkeletonBox";

export const SkeletonCircle = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("sk-circle", className)} {...props} />
));

SkeletonCircle.displayName = "SkeletonCircle";

export const SkeletonAvatar = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx("sk-avatar", className)} {...props} />
));

SkeletonAvatar.displayName = "SkeletonAvatar";
