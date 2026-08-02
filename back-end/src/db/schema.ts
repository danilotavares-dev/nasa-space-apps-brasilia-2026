import { integer, pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const participacaoEventosEnum = pgEnum('participacao_eventos', [
  'Sim',
  'Não',
]);

export const contribuicaoEnum = pgEnum('contribuicao', [
  'Coordenação',
  'Design',
  'Logística e Operações',
  'Fotografia / Audiovisual',
  'Tecnologia',
  'Marketing e Comunicação',
  'Parcerias e Patrocínios',
  'Outro',
]);

export const cargaHorariaEnum = pgEnum('carga_horaria', [
  '1-3h',
  '3-5h',
  '5-8h',
  '8-12h',
  '12h+',
]);

export const participacaoReuniaoEnum = pgEnum('participacao_reuniao', [
  'Sim',
  'Não',
]);

export const formTable = pgTable('form', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  nome: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 150 }).notNull().unique(),
  telefone: varchar({ length: 20 }).notNull().unique(),

  universidade: varchar({ length: 100 }).notNull(),
  curso: varchar({ length: 100 }).notNull(),

  participacaoEventos: participacaoEventosEnum().notNull(),

  contribuicoes: text().array().notNull(),
  preferenciaContribuicao: contribuicaoEnum().notNull(),

  cargaHoraria: cargaHorariaEnum().notNull(),
  participacaoReuniao: participacaoReuniaoEnum().notNull(),

  motivoParticipacao: varchar({ length: 800 }).notNull(),
});
