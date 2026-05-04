const API = '/api';

export async function createTeam(data) {
  const r = await fetch(`${API}/teams`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await r.json();
  if (!r.ok) throw new Error(json.error || 'Erreur serveur');
  return json;
}

export async function getTeam(code) {
  const r = await fetch(`${API}/teams/${code}`);
  const json = await r.json();
  if (!r.ok) throw new Error(json.error || 'Équipe introuvable');
  return json;
}

export async function getTeams() {
  const r = await fetch(`${API}/teams`);
  return r.json();
}

export async function joinTeam(code, data) {
  const r = await fetch(`${API}/teams/${code}/join`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await r.json();
  if (!r.ok) throw new Error(json.error || 'Erreur serveur');
  return json;
}

export async function confirmPlayer(id) {
  const r = await fetch(`${API}/teams/players/${id}/confirm`, { method: 'PUT' });
  const json = await r.json();
  if (!r.ok) throw new Error(json.error);
  return json;
}

export async function removePlayer(id) {
  const r = await fetch(`${API}/teams/players/${id}`, { method: 'DELETE' });
  const json = await r.json();
  if (!r.ok) throw new Error(json.error);
  return json;
}
