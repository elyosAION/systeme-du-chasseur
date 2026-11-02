/* Fonction Netlify : discussion avec les personnages du Système du Chasseur.
   Reçoit { characterId, message, history, context, model } et appelle l'API
   Anthropic avec la clé stockée dans la variable d'environnement ANTHROPIC_API_KEY. */
const { PERSONAS, buildSystem } = require('./personas.js');

const ALLOWED_MODELS = ['claude-sonnet-5-5', 'claude-haiku-5-5', 'claude-opus-5-5'];
const HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
const reply = (statusCode, body) => ({ statusCode, headers: HEADERS, body: JSON.stringify(body) });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return reply(405, { error: 'Méthode non autorisée.' });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return reply(500, { error: 'La variable ANTHROPIC_API_KEY n’est pas configurée sur Netlify.' });

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch (e) { return reply(400, { error: 'Requête illisible.' }); }
  const id = String(body.characterId || '');
  if (!PERSONAS[id]) return reply(400, { error: 'Personnage inconnu.' });
  const message = String(body.message || '').trim().slice(0, 2000);
  if (!message) return reply(400, { error: 'Message vide.' });

  /* Historique : rôles alternés, commence par l'utilisateur, 20 messages max */
  const messages = [];
  for (const m of (Array.isArray(body.history) ? body.history : []).slice(-20)) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) continue;
    const content = String(m.content || '').slice(0, 2000);
    if (!content) continue;
    if (!messages.length && m.role !== 'user') continue;
    if (messages.length && messages[messages.length - 1].role === m.role) messages[messages.length - 1].content += '\n' + content;
    else messages.push({ role: m.role, content });
  }
  if (messages.length && messages[messages.length - 1].role === 'user') messages[messages.length - 1].content += '\n' + message;
  else messages.push({ role: 'user', content: message });

  const model = process.env.ANTHROPIC_MODEL || (ALLOWED_MODELS.includes(body.model) ? body.model : 'claude-sonnet-5-5');

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: 700, system: buildSystem(id, body.context), messages })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return reply(res.status, { error: (data.error && data.error.message) || `Erreur API ${res.status}` });
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
    return reply(200, { reply: text || '…' });
  } catch (e) {
    return reply(502, { error: 'Impossible de joindre l’API Anthropic.' });
  }
};
