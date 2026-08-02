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

app.post('/api/submit-form', async (req, res) => {
  try {
    const data = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de e-mail inválido. Verifique se está correto.',
      });
    }

    await db.insert(formTable).values({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      universidade: data.universidade,
      curso: data.curso,
      participacaoEventos: data.participacaoEventos,
      contribuicoes: data.contribuicoes,
      preferenciaContribuicao: data.preferenciaContribuicao,
      cargaHoraria: data.cargaHoraria,
      participacaoReuniao: data.participacaoReuniao,
      motivoParticipacao: data.motivoParticipacao,
    });

    console.log(`Usuário ${data.nome} salvo com sucesso!`);
    res.status(201).json({ success: true, message: 'Dados salvos no banco!' });
  } catch (error: any) {
    if (error.code === '23505') {
      if (error.detail.includes('email')) {
        return res
          .status(400)
          .json({ success: false, message: 'Este e-mail já está cadastrado.' });
      }
      if (error.detail.includes('telefone')) {
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
});

app.listen(3000, () => {
  console.log(
    'Servidor Express rodando na porta 3000! Aguardando formulários...',
  );
});
