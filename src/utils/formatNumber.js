export function formatNumber(x, decimals = 0) {
  var parts = x.toFixed(decimals).split(".");
  return (
    parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") +
    (parts[1] ? "." + parts[1] : "")
  );
}
