export async function fetchUsers() {
  const res = await fetch("endpoint")
  return res.json()
}
