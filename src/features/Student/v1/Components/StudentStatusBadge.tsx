interface Props {
  status: "Paid" | "Partial" | "Overdue";
}

export function StudentStatusBadge({ status }: Props) {
  const styles = {
    Paid: "text-emerald-500",
    Partial: "text-orange-500",
    Overdue: "text-red-500",
  };

  return <span className={styles[status]}>● {status}</span>;
}
