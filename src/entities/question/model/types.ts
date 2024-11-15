/**
 * Типы данных для вопросов квиза
 */

/** Структура вопроса */
export interface Question {
  /** Текст вопроса */
  text: string;
  /** URL изображения для вопроса (опционально) */
  image?: string;
  isVideo?: boolean;
  /** Варианты ответов */
  options: QuestionOption[];
}

/** Структура варианта ответа */
export interface QuestionOption {
  /** Текст варианта ответа */
  text: string;
  /** Является ли ответ правильным */
  correct?: boolean;
  /** Количество баллов за выбор этого варианта */
  rating: number;
  /** Если музыкальный вопрос то URL музыки */
  musicSrc?: string;
}
