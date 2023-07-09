export default function millify(n: number, d = 2) {
  const base = Math.floor(Math.log(Math.abs(n)) / Math.log(1000));
  const suffix = "KMBTQ"[base - 1];
  const halfSpace = "\u2009";
  return suffix ? (n / Math.pow(1000, base)).toFixed(d) + halfSpace + suffix : "" + n;
}
