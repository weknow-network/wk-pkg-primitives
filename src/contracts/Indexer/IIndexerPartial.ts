import { StringOrKeyof } from './StringOrKeyof';

/**
 * represent indexer access
 * Tip: in order of getting the indexer values use Object.values<TValue>(indexer)
 *
 * @export
 * @template TKey
 * @template TValue
 */

export type IIndexerPartial<TKey, TValue = unknown> = Partial<
  Record<StringOrKeyof<TKey>, TValue>
>;
