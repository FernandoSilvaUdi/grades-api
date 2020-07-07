export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
      min: 0,
    },

    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const Grades = mongoose.model('grades', schema, 'grades');

  return Grades;
};
