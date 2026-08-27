import 'dotenv/config';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/node-postgres';
import express from 'express';
import { formTable } from './db/schema.js';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    'A variável de ambiente DATABASE_URL não foi encontrada no arquivo .env',
  );
}

const db = drizzle(databaseUrl);
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/respostas', async (req, res) => {
  try {
    const todasAsRespostas = await db.select().from(formTable);
    res.status(200).json(todasAsRespostas);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ success: false, message: 'Falha ao buscar dados.' });
  }
});

const REQUIRED_STRING_FIELDS = [
  'nome',
  'email',
  'telefone',
  'universidade',
  'curso',
  'participacaoEventos',
  'preferenciaContribuicao',
  'cargaHoraria',
  'participacaoReuniao',
  'motivoParticipacao',
] as const;

function validateSubmission(data: Record<string, any>): string | null {
  for (const field of REQUIRED_STRING_FIELDS) {
    const value = data[field];
    if (typeof value !== 'string' || value.trim().length === 0) {
      return `O campo "${field}" é obrigatório.`;
    }
  }

  if (!Array.isArray(data.contribuicoes) || data.contribuicoes.length === 0) {
    return 'Selecione pelo menos uma área de contribuição.';
  }

  const phoneCleaned = String(data.telefone).replace(/[\s()+-]/g, '');
  if (!/^\d{10,11}$/.test(phoneCleaned)) {
    return 'Formato de telefone inválido. Use apenas números, com DDD (ex: 61999999999).';
  }

  return null;
}

app.post('/api/submit-form', async (req, res) => {
  try {
    const data = req.body;

    const validationError = validateSubmission(data);
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de e-mail inválido. Verifique se está correto.',
      });
    }

    await db.insert(formTable).values({
      nome: data.nome.trim(),
      email: data.email.trim().toLowerCase(),
      telefone: data.telefone.trim(),
      universidade: data.universidade.trim(),
      curso: data.curso.trim(),
      participacaoEventos: data.participacaoEventos,
      contribuicoes: data.contribuicoes,
      preferenciaContribuicao: data.preferenciaContribuicao,
      cargaHoraria: data.cargaHoraria,
      participacaoReuniao: data.participacaoReuniao,
      motivoParticipacao: data.motivoParticipacao.trim(),
    });

    console.log(`Usuário ${data.nome} salvo com sucesso!`);
    res.status(201).json({ success: true, message: 'Dados salvos no banco!' });
  } catch (error: any) {
    const pgError = error.cause ?? error;

    if (pgError.code === '23505') {
      if (pgError.detail?.includes('email')) {
        return res
          .status(400)
          .json({ success: false, message: 'Este e-mail já está cadastrado.' });
      }
      if (pgError.detail?.includes('telefone')) {
        return res.status(400).json({
          success: false,
          message: 'Este telefone já está cadastrado.',
        });
      }
    }

    console.error('Erro ao salvar no banco:', error);
    res
      .status(500)
      .json({ success: false, message: 'Falha interna ao salvar os dados.' });
  }

  console.error('Erro ao salvar no banco:', error);
  res
    .status(500)
    .json({ success: false, message: 'Falha interna ao salvar os dados.' });
});

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

app.listen(3000, () => {
  console.log(
    'Servidor Express rodando na porta 3000! Aguardando formulários...',
  );
});
