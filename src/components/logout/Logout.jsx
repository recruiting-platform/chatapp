export function handleLogout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.reload();
}
