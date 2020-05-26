import { Model, Document } from 'mongoose';
import { normalizeDocument } from '../utilities';

type GetOneOptions = {
  query?: Query;
};

type Query = any;

/**
 * Retrieves a document matching the provided
 * query in a collection.
 */
const getOne = <T>(model: Model<Document>) => async (
  options: GetOneOptions = {},
): Promise<T> => {
  const { query = {} } = options;

  const fetchedDocument = await model.findOne(query);

  return fetchedDocument ? normalizeDocument(fetchedDocument) : null;
};

export default getOne;
