
export async function fetchUsers() {
  const res = await fetch("/api/users")
  return res.json()
}

export async function login(credentials: { username: string; password: string }): Promise<void> {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include', // Важно для отправки/приема cookies
  });
  if (!res.ok) {
    throw new Error('Login failed');
  }
  // Предполагается, что cookie устанавливается сервером
}

