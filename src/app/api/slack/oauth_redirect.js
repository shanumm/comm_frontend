export default function handler(req, res) {
  console.log(res, "res");
  console.log(req, "req");
  console.log(JSON.parse(req), " json req");
  res.status(200).json({ message: "Hello from Next.js!" });
}
