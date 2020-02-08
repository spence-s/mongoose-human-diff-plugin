const captainHook = require('captain-hook');
const hrDiff = require('human-object-diff');

module.exports = cb => (schema, opts) => {
  if (typeof schema.postUpdate !== 'function') schema.plugin(captainHook);

  if (!opts) opts = {};

  if (typeof cb !== 'function')
    throw new Error('A callback function is required.');

  schema
    .virtual('previous')
    .get(function() {
      return this._previous;
    })
    .set(function(doc) {
      this._previous = doc;
    });

  schema.post('init', doc => {
    doc.previous = doc.toObject();
  });

  schema.postUpdate(doc => {
    const { previous, ...updated } = doc.toObject({ virtuals: true });
    const original = doc.previous || {};

    // Get the model name for logging
    const { modelName } = doc.constructor;

    const differences = hrDiff(original, updated, {
      objectName: modelName,
      ...opts
    });

    if (differences && differences.length > 0) cb(differences);
  });

  return schema;
};
