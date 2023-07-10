import { halfSpace } from "./halfSpaceChar";

export default function millify(n: number, d = 2) {
  const base = Math.floor(Math.log(Math.abs(n)) / Math.log(1000));
  const suffix = "kMBTQ"[base - 1];

  return suffix ? (n / Math.pow(1000, base)).toFixed(d) + halfSpace + suffix : "" + n;
}
