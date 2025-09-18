import { pgTable, text, timestamp, uuid, boolean } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

// Tabela de usuários
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Tabela de listas
export const lists = pgTable('lists', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  title: text('title').notNull(),
  description: text('description'),
  isPublic: boolean('is_public').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Tabela de itens das listas
export const listItems = pgTable('list_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  listId: uuid('list_id').references(() => lists.id),
  name: text('name').notNull(),
  quantity: text('quantity'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
})

// Tabela de vídeos
export const videos = pgTable('videos', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  title: text('title').notNull(),
  description: text('description'),
  url: text('url').notNull(),
  thumbnail: text('thumbnail'),
  isPublic: boolean('is_public').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Schemas Zod para validação
export const insertUserSchema = createInsertSchema(users)
export const selectUserSchema = createSelectSchema(users)

export const insertListSchema = createInsertSchema(lists)
export const selectListSchema = createSelectSchema(lists)

export const insertListItemSchema = createInsertSchema(listItems)
export const selectListItemSchema = createSelectSchema(listItems)

export const insertVideoSchema = createInsertSchema(videos)
export const selectVideoSchema = createSelectSchema(videos)

// Tipos TypeScript
export type User = z.infer<typeof selectUserSchema>
export type NewUser = z.infer<typeof insertUserSchema>

export type List = z.infer<typeof selectListSchema>
export type NewList = z.infer<typeof insertListSchema>

export type ListItem = z.infer<typeof selectListItemSchema>
export type NewListItem = z.infer<typeof insertListItemSchema>

export type Video = z.infer<typeof selectVideoSchema>
export type NewVideo = z.infer<typeof insertVideoSchema>





